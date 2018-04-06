import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow, ShallowWrapper } from 'enzyme';
import ScenarioListGroupContainer from './ScenarioListGroupContainer.component';
const configureMockStore = require('redux-mock-store');

const mockStore = configureMockStore();
let store = mockStore({
	scenarios: ['Scenario 1', 'Scenario 2']
});
let component: ShallowWrapper<any, any>;

describe('ScenarioListGroupContainer Component', () => {
	beforeEach(() => {
		component = shallow(<ScenarioListGroupContainer store={store} />);
	});

	it('should define the component', () => {
		expect(component).toBeDefined();
	});

	it('should define the scenarios prop', () => {
		expect(component.props().scenarios).toEqual(['Scenario 1', 'Scenario 2']);
	});

	it('should define the onSelectScenario prop function', () => {
		expect(typeof component.props().onSelectScenario).toBe('function');
	});

	it('should dispatch the select scenario action', () => {
		component.props().onSelectScenario('New Selected Scenario');
		expect(store.getActions()).toEqual([ { type: 'SELECT_SCENARIO', selectedScenario: 'New Selected Scenario' } ]);
	});
});
