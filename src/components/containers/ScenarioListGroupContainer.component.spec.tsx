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

	it('should dispatch', () => {
		// component.props().store.dispatch = () => {console.log('cristo dio')};
		component.props().onSelectScenario('New Selected Scenario');
		// console.log(store.getState().content);
		// store.dispatch(selectScenario(new ScenarioData('New Selected Scenario', 1, '', [])));
		// selectScenario = jest.fn(() => {});
		// component.props().onSelectScenario('New Selected Scenario');
		// console.log(store.getState());
		// expect(store.dispatch).toHaveBeenCalled();
	});
});
