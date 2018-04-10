import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow, ShallowWrapper } from 'enzyme';
import ScenariosPage from './ScenariosPage.component';
const configureMockStore = require('redux-mock-store');

const scenarioOne = {
	name: 'Scenario 1',
	filePath: 'Scenario Path 1',
	duration: 1
};
const scenarioTwo = {
	name: 'Scenario 2',
	filePath: 'Scenario Path 2',
	duration: 2
};

const mockStore = configureMockStore();
let store = mockStore({
	scenarios: [scenarioOne, scenarioTwo]
});
let component: ShallowWrapper<any, any>;

describe('ScenariosPage Container Component', () => {
	beforeEach(() => {
		component = shallow(<ScenariosPage store={store} />);
	});

	it('should define the component', () => {
		expect(component).toBeDefined();
	});

	it('should define the scenariosChartData prop', () => {
		expect(component.props().scenariosChartData).toBeDefined();
		expect(component.props().scenariosChartData).toEqual([
			{
				title: scenarioOne.name,
				subTitle: scenarioOne.filePath,
				x: `1`,
				y: scenarioOne.duration
			},
			{
				title: scenarioTwo.name,
				subTitle: scenarioTwo.filePath,
				x: `2`,
				y: scenarioTwo.duration
			}
		]);
	});

	it('should define the scenariosPieChartData prop', () => {
		expect(component.props().scenariosPieChartData).toBeDefined();
		expect(component.props().scenariosPieChartData).toEqual([
			{
				x: scenarioOne.name,
				y: scenarioOne.duration
			},
			{
				x: scenarioTwo.name,
				y: scenarioTwo.duration
			}
		]);
	});
});
