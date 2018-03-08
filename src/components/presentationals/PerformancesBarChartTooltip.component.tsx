import * as React from 'react';
import ScenarioData, { IScenarioChartObject } from 'models/ScenarioData';

const BarChart = require('react-d3-components').BarChart;

export interface IBarChartData {
	title: string;
	subTitle: string;
	x: string;
	y: number;
}

interface IPerformancesBarChartTooltipProps {
	data: IBarChartData[];
	slicesSize?: number;
	titleXAxis?: string;
	titleYAxis?: string;
	width?: number;
	height?: number;
	tooltip?: () => React.ReactElement<HTMLElement>;
}

class PerformancesBarChartTooltip extends React.Component<IPerformancesBarChartTooltipProps> {
	public dataSlices: IBarChartData[][] = [];

	constructor(props: IPerformancesBarChartTooltipProps) {
		super(props);
		this.getDefaultTooltip = this.getDefaultTooltip.bind(this);
	}

	public render() {
		const input = {
			width: this.props.width || 1000,
			height: this.props.height || 600,
			xLabel: this.props.titleXAxis || 'X',
			yLabel: this.props.titleYAxis || 'Y',
			barPadding: 0.8,
			tooltip: this.props.tooltip || this.getDefaultTooltip
		};

		return (
			<div>
				{this.dataSlices.map((scenarioValues: IBarChartData[], index: number) => (
					<BarChart
						key={index}
						data={{ values: scenarioValues }}
						width={input.width}
						height={input.height}
						barPadding={input.barPadding}
						xAxis={{
							innerTickSize: 5,
							label: input.xLabel
						}}
						yAxis={{
							innerTickSize: 5,
							label: input.yLabel
						}}
						tooltipHtml={input.tooltip}
						colorByLabel={false}
						margin={{
							top: 10,
							bottom: 50,
							left: 50,
							right: 10
						}}
					/>
				))}
			</div>
		);
	}

	private sliceData(): void {
		const slicesSize: number = 15;
		this.dataSlices = [];
		for (let i = 0; i < this.props.data.length; i += slicesSize) {
			this.dataSlices.push(this.props.data.slice(i, i + slicesSize));
		}
	}

	private getDefaultTooltip(x: string) {
		const errorScenario = {
			title: 'error',
			subTitle: 'error',
			y: 0
		};
		const currentElement = this.props.data.find(el => el.x === x) || errorScenario;
		return (
			<div className="wrapper-scenario-chart-tooltip">
				<h3>{currentElement.title}</h3>
				{getSubTitle(currentElement.subTitle)}
				<h5 className="single-scenario-duration">{currentElement.y.toString()} seconds</h5>
			</div>
		);

		function getSubTitle(subTitle: string | undefined): React.ReactElement<HTMLElement> | void {
			if (currentElement.subTitle) {
				return <h4 className="single-scenario-file">{subTitle}</h4>;
			} else {
				return;
			}
		}
	}
}

export default PerformancesBarChartTooltip;
