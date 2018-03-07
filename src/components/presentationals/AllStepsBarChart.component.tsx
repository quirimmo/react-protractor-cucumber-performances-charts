import * as React from 'react';
import ScenarioData, { IScenarioChartObject } from 'models/ScenarioData';

const BarChart = require('react-d3-components').BarChart;

interface IAllStepsBarChartProps {
	steps: IScenarioChartObject[];
}

class AllStepsBarChart extends React.Component<IAllStepsBarChartProps> {
	public stepsSlices: IScenarioChartObject[][];

	constructor(props: IAllStepsBarChartProps) {
		super(props);
		this._getStepsTooltip = this._getStepsTooltip.bind(this);

		const slicesSize: number = 15;
		this.stepsSlices = [];
		for (let i = 0; i < this.props.steps.length; i += slicesSize) {
			this.stepsSlices.push(this.props.steps.slice(i, i + slicesSize));
		}
	}

	public render() {
		const input = {
			width: 1000,
			height: 600,
			barPadding: 0.8,
			xLabel: 'X',
			yLabel: 'Y',
			tooltip: this._getStepsTooltip
		};

		return (
			<div>
				{this.stepsSlices.map((scenarioValues: IScenarioChartObject[], index: number) => (
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

	public _getStepsTooltip(x: any) {
		const errorStep = {
			name: 'error',
			file: 'error',
			y: 0
		};
		const currentStep = this.props.steps.find(step => step.x === x) || errorStep;
		return (
			<div className="wrapper-scenario-chart-tooltip">
				<h3>{currentStep.name}</h3>
				<h5 className="single-scenario-duration">{currentStep.y.toString()} seconds</h5>
			</div>
		);
	}
}

export default AllStepsBarChart;
