import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Steps from './Steps.component';
import PerformancesBarChart, { IBarChartData } from './PerformancesBarChart.component';
import { Container, Row, Col } from 'reactstrap';
import LongestStep from './LongestStep.component';

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
const chartData: IBarChartData[] = [dataObject1, dataObject2];

describe('Steps Presentational Component', () => {
	beforeEach(() => {
		component = shallow(<Steps stepsChartData={chartData}/>);
	});

	describe('General', () => {
		it('should define the component', () => {
			expect(component).toBeDefined();
		});

		it('should display a Container component', () => {
			expect(component.find(Container)).toHaveLength(1);
		});

		it('should display two Row components', () => {
			expect(component.find(Row)).toHaveLength(2);
		});

		it('should display two Col components', () => {
			expect(component.find(Col)).toHaveLength(2);
		});

		it('should display a LongestStep component', () => {
			const longestStepComponent = component.find(LongestStep);
			expect(longestStepComponent).toHaveLength(1);
			expect(longestStepComponent.props()).toEqual(expect.objectContaining({
				longestStep: 'Title 1'
			}));
		});

		it('should display a PerformancesBarChart component', () => {
			const performancesBarChartComponent = component.find(PerformancesBarChart);
			expect(performancesBarChartComponent).toHaveLength(1);
			expect(performancesBarChartComponent.props()).toEqual(expect.objectContaining({
				slicesSize: 15,
				titleXAxis: 'Steps',
				titleYAxis: 'Seconds',
				data: chartData
			}));
		});
	});
});
