import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import { shallow, ShallowWrapper } from 'enzyme';
const configureMockStore = require('redux-mock-store');

import PerformancesResultsReader from './../../models/PerformancesResultsReader';
jest.mock('./__mocks__/PerformancesResultsReader.js');
// jest.mock(
// 	'./../../models/PerformancesResultsReader',
// 	class PerformancesResultsReader{
// 		constructor() {
// 			console.log('maybe work?')
// 		}
// 	}
// );
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

	it('props', () => {
		console.log(component.props().store.getState());
	});
});
