import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Main from './Scenarios.component';
import { IBarChartData } from './PerformancesBarChart.component';
import { IPieChartData } from './PerformancesPieChart.component';
import { Container } from 'reactstrap';
import TotalDurationContainer from '../containers/TotalDurationContainer.component';
import ScenarioListGroupContainer from '../containers/ScenarioListGroupContainer.component';
import PerformancesChartTabs from './PerformancesChartTabs.component';

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
const pieDataObject1 = { x: 'Title 1', y: 1 };
const pieDataObject2 = { x: 'Title 2', y: 2 };
const pieData: IPieChartData[] = [pieDataObject1, pieDataObject2];

describe('Main Presentational Component', () => {
	beforeEach(() => {
		component = shallow(<Main scenariosChartData={chartData} scenariosPieChartData={pieData}/>);
	});

	describe('General', () => {
		it('should define the component', () => {
			expect(component).toBeDefined();
		});

		it('should display a Container component', () => {
			expect(component.find(Container)).toHaveLength(1);
		});

		it('should display a TotalDurationContainer component', () => {
			expect(component.find(TotalDurationContainer)).toHaveLength(1);
		});

		it('should display a ScenarioListGroupContainer component', () => {
			const scenarioListGroupElement = component.find(ScenarioListGroupContainer);
			expect(scenarioListGroupElement).toHaveLength(1);
			expect(scenarioListGroupElement.props()).toEqual(expect.objectContaining({
				scenariosChartData: chartData
			}));
		});

		it('should display a PerformancesChartTabs component', () => {
			const performancesChartTabElement = component.find(PerformancesChartTabs);
			expect(performancesChartTabElement).toHaveLength(1);
			expect(performancesChartTabElement.props()).toEqual(expect.objectContaining({
				scenariosChartData: chartData,
				scenariosPieChartData: pieData
			}));
		});
	});
});
