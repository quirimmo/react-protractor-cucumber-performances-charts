import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow, ShallowWrapper } from 'enzyme';
import ScenarioDetailsPage from './ScenarioDetailsPage.component';
const configureMockStore = require('redux-mock-store');

const mockStore = configureMockStore();
let store = mockStore({
	selectedScenario: 'Selected'
});
let component: ShallowWrapper<any, any>;

describe('Sceario Details Container Component', () => {
	beforeEach(() => {
		component = shallow(<ScenarioDetailsPage store={store} />);
	});

	it('should define the component', () => {
		expect(component).toBeDefined();
	});

	it('should define the selected scenario prop', () => {
		expect(component.props().selectedScenario).toEqual('Selected');
	});
});
