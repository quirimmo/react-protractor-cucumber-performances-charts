import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import TabBodyPanes from './TabBodyPanes.component';
import PerformancesBarChart, { IBarChartData } from './PerformancesBarChart.component';
import PerformancesPieChart, { IPieChartData } from './PerformancesPieChart.component';
import { TabContent, TabPane, Row, Col } from 'reactstrap';

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

describe('TabBodyPanes Presentational Component', () => {
	beforeEach(() => {
		component = shallow(<TabBodyPanes activeTab="1" scenariosChartData={chartData} scenariosPieChartData={pieData}/>);
	});

	describe('General', () => {
		it('should define the component', () => {
			expect(component).toBeDefined();
		});

		it('should display the TabContent component', () => {
			const tabContentComponent = component.find(TabContent);
			expect(tabContentComponent).toHaveLength(1);
			expect(tabContentComponent.props().activeTab).toEqual('1');
		});

		it('should display two TabPane components', () => {
			const tabPaneComponents = component.find(TabPane);
			expect(tabPaneComponents).toHaveLength(2);
			expect(tabPaneComponents.at(0).props().tabId).toEqual('1');
			expect(tabPaneComponents.at(1).props().tabId).toEqual('2');
		});

		it('should display two Row components', () => {
			expect(component.find(Row)).toHaveLength(2);
		});

		it('should display two Col components', () => {
			expect(component.find(Col)).toHaveLength(2);
		});

		it('should display the PerformancesBarChart component', () => {
			const performancesBarChartComponent = component.find(PerformancesBarChart);
			expect(performancesBarChartComponent).toHaveLength(1);
			expect(performancesBarChartComponent.props()).toEqual(expect.objectContaining({
				titleYAxis: 'Seconds',
				titleXAxis: 'Scenarios',
				data: chartData,
				slicesSize: 15
			}));
		});

		it('should display the PerformancesPieChart component', () => {
			const performancesPieChartComponent = component.find(PerformancesPieChart);
			expect(performancesPieChartComponent).toHaveLength(1);
			expect(performancesPieChartComponent.props()).toEqual(expect.objectContaining({
				data: pieData,
				slicesSize: 15
			}));
		});
	});
});
