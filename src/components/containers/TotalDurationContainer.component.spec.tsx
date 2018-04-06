import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow, ShallowWrapper } from 'enzyme';
import TotalDurationContainer from './TotalDurationContainer.component';
const configureMockStore = require('redux-mock-store');

const mockStore = configureMockStore();
let store = mockStore({
	totalDuration: 10
});
let component: ShallowWrapper<any, any>;

describe('TotalDurationContainer Component', () => {
	beforeEach(() => {
		component = shallow(<TotalDurationContainer store={store} />);
	});

	it('should define the component', () => {
		expect(component).toBeDefined();
	});

	it('should define the totalDuration prop', () => {
		expect(component.props().totalDuration).toBeDefined();
		expect(component.props().totalDuration).toEqual(10);
	});
});
