import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import PerformancesBarChart, { IBarChartData } from './PerformancesBarChart.component';
import PerformancesBarChartTooltip from './PerformancesBarChartTooltip.component';
const BarChart = require('react-d3-components').BarChart;

let component: any;
const dataObject1 = {
	title: 'Title 1',
	subTitle: 'Sub Title 1',
	x: 'x 1',
	y: 1
};
const dataObject2 = {
	title: 'Title 2',
	subTitle: 'Sub Title 2',
	x: 'x 2',
	y: 2
};
const data: IBarChartData[] = [dataObject1, dataObject2];

describe('PerformancesBarChart Presentational Component', () => {
	describe('slicesSize prop', () => {
		describe('Component without slicesSize defined', () => {
			beforeEach(() => {
				component = shallow(<PerformancesBarChart data={data} />);
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
				component = shallow(<PerformancesBarChart data={data} slicesSize={1} />);
			});

			it('should be defined', () => {
				expect(component).toBeDefined();
			});

			describe('dataSlices attribute', () => {
				it('should be equal to an array sliced with data prop', () => {
					expect(component.instance().dataSlices).toEqual([[dataObject1], [dataObject2]]);
				});
			});
		});
	});

	describe('tooltip', () => {
		beforeEach(() => {
			component = shallow(<PerformancesBarChart data={data} />);
		});

		describe('data contains the given element', () => {
			it('should return the PerformancesBarChartTooltip with the right props', () => {
				expect(component.instance().getDefaultTooltip('x 1')).toEqual(
					<PerformancesBarChartTooltip title="Title 1" subTitle="Sub Title 1" y={1} />
				);
			});
		});

		describe('data does not contain the given element', () => {
			it('should return null', () => {
				expect(component.instance().getDefaultTooltip('not present value')).toBeNull();
			});
		});
	});

	describe('render', () => {
		describe('Component without slicesSize defined', () => {
			beforeEach(() => {
				component = shallow(<PerformancesBarChart data={data} />);
			});

			it('should contain one BarChart component', () => {
				expect(component.find(BarChart)).toHaveLength(1);
			});

			it('should contain one BarChart with the default props', () => {
				expect(component.find(BarChart).props()).toEqual(
					expect.objectContaining({
						barPadding: 0.8,
						data: {
							values: data
						},
						width: 1000,
						height: 600,
						xAxis: {
							innerTickSize: 5,
							label: 'X'
						},
						yAxis: {
							innerTickSize: 5,
							label: 'Y'
						},
						tooltipHtml: component.instance().getDefaultTooltip,
						colorByLabel: false,
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
				component = shallow(<PerformancesBarChart data={data} slicesSize={1} />);
			});

			it('should contain two BarChart components', () => {
				expect(component.find(BarChart)).toHaveLength(2);
			});
		});
	});
});
