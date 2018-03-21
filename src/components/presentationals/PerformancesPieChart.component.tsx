import * as React from 'react';
const PieChart = require('react-d3-components').PieChart;

export interface IPieChartData {
	x: string;
	y: number;
}

interface IPerformancesPieChartProps {
	data: IPieChartData[];
	slicesSize?: number;
	width?: number;
	height?: number;
}

class PerformancesPieChart extends React.Component<IPerformancesPieChartProps> {
	public dataSlices: IPieChartData[][] = [];

	constructor(props: IPerformancesPieChartProps) {
		super(props);
		// if you wanna slices data in multiple charts
		this.props.slicesSize ? this.sliceData() : this.dataSlices.push(this.props.data);
	}

	public render() {
		const input = {
			width: this.props.width || 1000,
			height: this.props.height || 600,
			barPadding: 0.8
		};

		return (
			<div>
				{this.dataSlices.map((data: IPieChartData[], index: number) => (
					<PieChart
						key={index}
						data={{ values: data }}
						width={input.width}
						height={input.height}
						sort={null}
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
}

export default PerformancesPieChart;
