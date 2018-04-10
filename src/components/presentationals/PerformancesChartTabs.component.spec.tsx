import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import PerformancesChartTabs from './PerformancesChartTabs.component';
import { IBarChartData } from './PerformancesBarChart.component';
import { IPieChartData } from './PerformancesPieChart.component';
import { Row, Col } from 'reactstrap';
import TabHeaderButtons from './TabHeaderButtons.component';
import TabBodyPanes from './TabBodyPanes.component';

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

describe('PerformancesChartTabs Presentational Component', () => {
	beforeEach(() => {
		component = shallow(<PerformancesChartTabs scenariosChartData={chartData} scenariosPieChartData={pieData} />);
	});

	describe('Component', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});

		it('should define a Row element', () => {
			expect(component.find(Row)).toHaveLength(1);
		});

		it('should define a Col element', () => {
			expect(component.find(Col)).toHaveLength(1);
		});

		it('should define the TabHeaderButtons component', () => {
			const tabHeaderButtonsComponent = component.find(TabHeaderButtons);
			expect(tabHeaderButtonsComponent).toBeDefined();
			expect(tabHeaderButtonsComponent.props()).toEqual(
				expect.objectContaining({
					activeTab: '1',
					toggleTab: component.instance().toggleTab
				})
			);
		});

		it('should define the TabBodyPanes component', () => {
			const tabBodyPanesComponent = component.find(TabBodyPanes);
			expect(tabBodyPanesComponent).toBeDefined();
			expect(tabBodyPanesComponent.props()).toEqual(
				expect.objectContaining({
					activeTab: '1',
					scenariosChartData: chartData,
					scenariosPieChartData: pieData
				})
			);
		});
	});

	describe('Methods', () => {
		it('should be defined', () => {
			expect(typeof component.instance().toggleTab).toEqual('function');
		});
	});

	describe('Toogle Tab', () => {
		it('should change the active tab', () => {
			expect(component.state('activeTab')).toEqual('1');
			component.instance().toggleTab('2');
			expect(component.state('activeTab')).toEqual('2');
		});
	});

	describe('Active Tab', () => {
		it('should be 1 by default', () => {
			expect(component.state('activeTab')).toEqual('1');
		});
	});
});
