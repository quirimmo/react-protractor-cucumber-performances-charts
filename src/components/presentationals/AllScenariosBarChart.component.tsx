import * as React from 'react';
import ScenarioData, { IScenarioChartObject } from 'models/ScenarioData';

const BarChart = require('react-d3-components').BarChart;

interface IAllScenariosBarChartProps {
	scenarios: IScenarioChartObject[];
}


class AllScenariosBarChart extends React.Component<IAllScenariosBarChartProps> {
	constructor(props: IAllScenariosBarChartProps) {
		super(props);
		this._getScenariosTooltip = this._getScenariosTooltip.bind(this);
	}

	public render() {
		const dataValues = { values: this.props.scenarios };

		const input = {
			data: dataValues,
			width: 1000,
			height: 600,
			barPadding: 0.8,
			xLabel: 'X',
			yLabel: 'Y',
			tooltip: this._getScenariosTooltip
		};

		return (
			<BarChart
				data={input.data}
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
