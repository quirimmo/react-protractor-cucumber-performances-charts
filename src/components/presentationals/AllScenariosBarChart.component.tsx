import * as React from 'react';
import ScenarioData from 'models/ScenarioData';

const BarChart = require('react-d3-components').BarChart;

interface IAllScenariosBarChartProps {
	scenarios: ScenarioData[];
}

interface IScenarioChartObject {
	name: string;
	file: string;
	x: string;
	y: number;
}

class AllScenariosBarChart extends React.Component<IAllScenariosBarChartProps> {
	public scenariosValues: IScenarioChartObject[];

	constructor(props: IAllScenariosBarChartProps) {
		super(props);
		this.scenariosValues = this.props.scenarios.map((scenario, index) => ({
			name: scenario.name,
			file: scenario.filePath,
			x: `${+(index + 1)}`,
			y: scenario.duration
		}));
		this._getScenariosTooltip = this._getScenariosTooltip.bind(this);
	}

	public render() {
		const dataValues = { values: this.scenariosValues };

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
		const currentScenario = this.scenariosValues.find(scenario => scenario.x === x) || errorScenario;
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
