import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import PerformancesPieChart, { IPieChartData } from './PerformancesPieChart.component';
import PerformancesBarChartTooltip from './PerformancesBarChartTooltip.component';
const PieChart = require('react-d3-components').PieChart;

let component: any;
const pieDataObject1 = {
	x: 'x 1',
	y: 1
};
const pieDataObject2 = {
	x: 'x 2',
	y: 2
};
const data: IPieChartData[] = [pieDataObject1, pieDataObject2];

describe('PerformancesPieChart Presentational Component', () => {
	describe('slicesSize prop', () => {
		describe('Component without slicesSize defined', () => {
			beforeEach(() => {
				component = shallow(<PerformancesPieChart data={data} />);
			});

			it('should be defined', () => {
				expect(component).toBeDefined();
			});

			describe('dataSlices attribute', () => {
				it('should be equal to an array with data prop', () => {
					expect(component.instance().dataSlices).toEqual([data]);
				});
			});
		});

		describe('Component with slicesSize defined', () => {
			beforeEach(() => {
				component = shallow(<PerformancesPieChart data={data} slicesSize={1} />);
			});

			it('should be defined', () => {
				expect(component).toBeDefined();
			});

			describe('dataSlices attribute', () => {
				it('should be equal to an array sliced with data prop', () => {
					expect(component.instance().dataSlices).toEqual([[pieDataObject1], [pieDataObject2]]);
				});
			});
		});
	});

	describe('render', () => {
		describe('Component without slicesSize defined', () => {
			beforeEach(() => {
				component = shallow(<PerformancesPieChart data={data} />);
			});

			it('should contain one PieChart component', () => {
				expect(component.find(PieChart)).toHaveLength(1);
			});

			it('should contain one PieChart with the default props', () => {
				expect(component.find(PieChart).props()).toEqual(
					expect.objectContaining({
						sort: null,
						data: {
							values: data
						},
						width: 1000,
						height: 600,
						margin: {
							top: 10,
							bottom: 50,
							left: 50,
							right: 10
						}
					})
				);
			});
		});

		describe('Component with slicesSize defined', () => {
			beforeEach(() => {
				component = shallow(<PerformancesPieChart data={data} slicesSize={1} />);
			});

			it('should contain two PieChart components', () => {
				expect(component.find(PieChart)).toHaveLength(2);
			});
		});
	});
});
