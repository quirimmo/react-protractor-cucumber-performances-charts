import * as React from 'react';

const BarChart = require('react-d3-components').BarChart;

export interface IAllScenariosBarChartProps {
}

class AllScenariosBarChart extends React.Component<IAllScenariosBarChartProps> {
	constructor(props: IAllScenariosBarChartProps) {
		super(props);
	}

	public render() {
		const dataValues = {
			values: [{
				name: 'Scenario Name',
				file: 'Filepath',
				x: '1',
				y: 5000
			}]
		};

		const input = {
			data: dataValues,
			width: 1000,
			height: 600,
			barPadding: 0.8,
			xLabel: 'X',
			yLabel: 'Y',
			tooltip: this._getDefaultTooltip
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

	public _getDefaultTooltip(x: number, y0: number, y: number) {
		console.log('getting default tooltip', x, y0, y);
		return 'AAA';
		// return (
		// 	<div>
		// 		<h1>AAAA {y.toString()}</h1>
		// 	</div>
		// );
	}
}

export default AllScenariosBarChart;
