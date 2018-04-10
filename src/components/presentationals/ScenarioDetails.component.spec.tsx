import * as React from 'react';
import ScenarioDetails from './ScenarioDetails.component';
import { shallow, ShallowWrapper } from 'enzyme';
import ScenarioData from './../../models/ScenarioData';
import StepData from './../../models/StepData';
import { Row, Col } from 'reactstrap';
import PerformancesBarChart from './PerformancesBarChart.component';

let component: any;
const selectedScenario = new ScenarioData('Scenario Name', 10, 'Scenario Path', [new StepData('Step 1', 1)]);

describe('ScenarioDetails Presentational Component', () => {
	beforeEach(() => {
		component = shallow(<ScenarioDetails selectedScenario={selectedScenario} />);
	});

	it('should define the component', () => {
		expect(component).toBeDefined();
	});

	it('should define a main section element', () => {
		expect(component.find('section')).toHaveLength(1);
	});

	it('should define four Row components', () => {
		expect(component.find(Row)).toHaveLength(4);
	});

	it('should define four Col components', () => {
		expect(component.find(Col)).toHaveLength(4);
	});

	it('should define the PerformancesBarChart components', () => {
		expect(component.find(PerformancesBarChart)).toHaveLength(1);
	});

	it('should display the scenario title', () => {
		expect(component.find(Col).at(0).props().children).toEqual(<b>Scenario Name</b>);
	});

	it('should display the path', () => {
		expect(component.find(Col).at(1).props().children).toEqual(<i>Scenario Path</i>);
	});

	it('should display the duration', () => {
		expect(component.find(Col).at(2).props().children).toEqual([0.01, ' seconds']);
	});

	describe('PerformancesBarChart', () => {
		it('should be called with the expected props', () => {
			expect(component.find(PerformancesBarChart).props()).toEqual(expect.objectContaining({
				titleYAxis: 'Seconds',
				titleXAxis: 'Steps',
				data: [{
					title: 'Step 1',
					subTitle: '',
					x: '1',
					y: 0.001
				}]
			}));
		});
	});
});
