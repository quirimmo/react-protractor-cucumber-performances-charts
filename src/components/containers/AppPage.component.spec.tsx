import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import { shallow, ShallowWrapper } from 'enzyme';
const configureMockStore = require('redux-mock-store');

jest.mock('./../../models/PerformancesResultsReader');
jest.mock('./../../models/StatisticsResultsReader');

import AppPage from './AppPage.component';

const mockStore = configureMockStore();
let store = mockStore({});
let component: ShallowWrapper<any, any>;

describe('App Container Component', () => {
	beforeEach(() => {
		component = shallow(<AppPage store={store} />);
	});

	it('should define the component', () => {
		expect(component).toBeDefined();
	});

	it('should define the scenarios data in the state', () => {
		expect(component.props().store.getState().scenarios).toEqual(['Scenario 1', 'Scenario 2']);
	});

	it('should define the steps data in the state', () => {
		expect(component.props().store.getState().steps).toEqual(['Step 1', 'Step 2']);
	});

	it('should define the total duration data in the state', () => {
		expect(component.props().store.getState().totalDuration).toEqual(10);
	});
});
