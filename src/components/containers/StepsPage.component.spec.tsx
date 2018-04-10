import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow, ShallowWrapper } from 'enzyme';
import StepsPage from './StepsPage.component';
const configureMockStore = require('redux-mock-store');

const stepOne = {
	name: 'Step 1',
	duration: 1
};
const stepTwo = {
	name: 'Step 2',
	duration: 2
};

const mockStore = configureMockStore();
let store = mockStore({
	steps: [stepOne, stepTwo]
});
let component: ShallowWrapper<any, any>;

describe('StepsPage Container Component', () => {
	beforeEach(() => {
		component = shallow(<StepsPage store={store} />);
	});

	it('should define the component', () => {
		expect(component).toBeDefined();
	});

	it('should define the scenariosChartData prop', () => {
		expect(component.props().stepsChartData).toBeDefined();
		expect(component.props().stepsChartData).toEqual([
			{
				title: stepOne.name,
				x: `1`,
				y: stepOne.duration
			},
			{
				title: stepTwo.name,
				x: `2`,
				y: stepTwo.duration
			}
		]);
	});
});
