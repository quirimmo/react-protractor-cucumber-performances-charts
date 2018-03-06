import * as React from 'react';
import ScenarioData, { IScenarioChartObject } from 'models/ScenarioData';

const BarChart = require('react-d3-components').BarChart;

interface IAllScenariosBarChartProps {
	scenarios: IScenarioChartObject[];
}

class AllScenariosBarChart extends React.Component<IAllScenariosBarChartProps> {
	public scenariosSlices: IScenarioChartObject[][];

	constructor(props: IAllScenariosBarChartProps) {
		super(props);
		this._getScenariosTooltip = this._getScenariosTooltip.bind(this);

		const slicesSize: number = 15;
		this.scenariosSlices = [];
		for (let i = 0; i < this.props.scenarios.length; i += slicesSize) {
			this.scenariosSlices.push(this.props.scenarios.slice(i, i + slicesSize));
		}
	}

	public render() {
		const input = {
			width: 1000,
			height: 600,
			barPadding: 0.8,
			xLabel: 'X',
			yLabel: 'Y',
			tooltip: this._getScenariosTooltip
		};

		return (
			<div>
				{this.scenariosSlices.map((scenarioValues: IScenarioChartObject[], index: number) => (
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

	public _getScenariosTooltip(x: any) {
		const errorScenario = {
			name: 'error',
			file: 'error',
			y: 0
		};
		const currentScenario = this.props.scenarios.find(scenario => scenario.x === x) || errorScenario;
		return (
			<div className="wrapper-scenario-chart-tooltip">
				<h3>{currentScenario.name}</h3>
				<h4 className="single-scenario-file">{currentScenario.file}</h4>
				<h5 className="single-scenario-duration">{currentScenario.y.toString()} seconds</h5>
			</div>
		);
	}
}

export default AllScenariosBarChart;
