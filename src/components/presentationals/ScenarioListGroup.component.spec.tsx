import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ScenarioListGroup from './ScenarioListGroup.component';
import { IBarChartData } from './PerformancesBarChart.component';
import ScenarioData from './../../models/ScenarioData';
import { Row, Col, Button, Collapse, ListGroup, ListGroupItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

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
const data: IBarChartData[] = [dataObject1, dataObject2];
const scenarios: ScenarioData[] = [
	new ScenarioData('Scenario Title 1', 1, 'Scenario Path 1', []),
	new ScenarioData('Scenario Title 2', 2, 'Scenario Path 2', [])
];
const onSelectScenario = jest.fn((selectedScenario: any) => {});

describe('ScenarioListGroup Presentational Component', () => {
	beforeEach(() => {
		component = shallow(<ScenarioListGroup scenarios={scenarios} scenariosChartData={data} onSelectScenario={onSelectScenario} />);
	});

	describe('General', () => {
		it('should define the component', () => {
			expect(component).toBeDefined();
		});

		it('should define the methods', () => {
			expect(typeof component.instance().toggle).toEqual('function');
			expect(typeof component.instance().getAllScenariosListItems).toEqual('function');
		});
	});

	describe('State', () => {
		it('should set collapse to false', () => {
			expect(component.state('collapse')).toBeFalsy();
		});
	});

	describe('toggle', () => {
		it('should change the state property collapse', () => {
			component.instance().toggle();
			expect(component.state('collapse')).toBeTruthy();
		});
	});

	describe('render', () => {
		it('should define a main section', () => {
			expect(component.find('section')).toHaveLength(1);
		});

		it('should define two Row components', () => {
			expect(component.find(Row)).toHaveLength(2);
		});

		it('should define two Col components', () => {
			expect(component.find(Col)).toHaveLength(2);
		});

		describe('Collapse', () => {
			let collapseElement: any;
			beforeEach(() => {
				collapseElement = component.find(Collapse);
			});

			it('should define a Collapse component', () => {
				expect(collapseElement).toHaveLength(1);
			});

			it('should have the isOpen prop set to false by default', () => {
				expect(collapseElement.props().isOpen).toBeFalsy();
			});
		});

		it('should define a ListGroup component', () => {
			expect(component.find(ListGroup)).toHaveLength(1);
		});

		it('should define two ListGroupItem components', () => {
			expect(component.find(ListGroupItem)).toHaveLength(2);
		});

		describe('NavLink', () => {
			let navLinkElements: any;
			beforeEach(() => {
				navLinkElements = component.find(NavLink);
			});

			it('should define two NavLink components', () => {
				expect(navLinkElements).toHaveLength(2);
			});

			it('should display the text', () => {
				expect(navLinkElements.at(0).props().children).toEqual(['Title 1', ' [', 'Sub Title 1', ']']);
			});

			it('should define the prop to as scenario-details', () => {
				expect(navLinkElements.at(0).props().to).toEqual('/scenario-details');
			});

			it('should call the onSelectScenario prop with the right method on click', () => {
				navLinkElements.at(0).simulate('click');
				expect(onSelectScenario).toHaveBeenCalledWith({ duration: 0.001, filePath: 'Scenario Path 1', name: 'Scenario Title 1', steps: [] });
			});
		});
	});

	describe('Collapse Button', () => {
		let buttonElement: any;
		beforeEach(() => {
			buttonElement = component.find(Button);
		});

		it('should be defined', () => {
			expect(buttonElement).toHaveLength(1);
		});

		it('should have the color prop defined', () => {
			expect(buttonElement.props().color).toEqual('primary');
		});

		it('should display the proper text', () => {
			expect(buttonElement.props().children).toEqual('Show All Scenarios');
		});

		it('should change the state on click', () => {
			expect(component.state('collapse')).toBeFalsy();
			buttonElement.simulate('click');
			expect(component.state('collapse')).toBeTruthy();
		});
	});
});
