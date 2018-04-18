import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import AppMainContent from './AppMainContent.component';
import { Row, Col } from 'reactstrap';
import { Route, Switch, Redirect } from 'react-router';
import ScenariosPage from '../containers/ScenariosPage.component';
import StepsPage from '../containers/StepsPage.component';
import ScenarioDetailsPage from '../containers/ScenarioDetailsPage.component';

let component: any;

describe('App Presentational Component', () => {
	beforeEach(() => {
		component = shallow(<AppMainContent />);
	});

	describe('Component', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});

		it('should define the public methods', () => {
			expect(typeof component.instance().getScenariosPageRoute).toEqual('function');
			expect(typeof component.instance().getStepsPageRoute).toEqual('function');
			expect(typeof component.instance().getScenarioDetailsPageRoute).toEqual('function');
		});

		it('should define the main section', () => {
			const mainSection = component.find('section');
			expect(mainSection).toHaveLength(1);
			expect(mainSection.hasClass('main-content-section')).toBeTruthy();
		});

		it('should define a Row', () => {
			expect(component.find(Row)).toHaveLength(1);
		});

		it('should define a Col', () => {
			const col = component.find(Col);
			expect(col).toHaveLength(1);
			expect(col.hasClass('page-content-wrapper')).toBeTruthy();
		});

		it('should define a Switch', () => {
			expect(component.find(Switch)).toHaveLength(1);
		});

		it('should define three Route', () => {
			expect(component.find(Route)).toHaveLength(3);
		});

		it('should define a Redirect', () => {
			expect(component.find(Redirect)).toHaveLength(1);
		});
	});

	describe('Routes', () => {
		describe('Main Route', () => {
			let mainRoute: any;
			beforeEach(() => {
				mainRoute = component.find(Route).at(0);
			});

			it('should define the path main', () => {
				expect(mainRoute.props().path).toEqual('/main');
			});

			it('should define the render bound to the function getScenariosPageRoute', () => {
				expect(mainRoute.props().render).toEqual(component.instance().getScenariosPageRoute);
			});
		});

		describe('Steps Route', () => {
			let stepsRoute: any;
			beforeEach(() => {
				stepsRoute = component.find(Route).at(1);
			});

			it('should define the path steps', () => {
				expect(stepsRoute.props().path).toEqual('/steps');
			});

			it('should define the render bound to the function getStepsPageRoute', () => {
				expect(stepsRoute.props().render).toEqual(component.instance().getStepsPageRoute);
			});
		});

		describe('Scemario Details Route', () => {
			let scenarioDetailsRoute: any;
			beforeEach(() => {
				scenarioDetailsRoute = component.find(Route).at(2);
			});

			it('should define the path scenario-details', () => {
				expect(scenarioDetailsRoute.props().path).toEqual('/scenario-details');
			});

			it('should define the render bound to the function getScenarioDetailsPageRoute', () => {
				expect(scenarioDetailsRoute.props().render).toEqual(component.instance().getScenarioDetailsPageRoute);
			});
		});
	});

	describe('Redirect', () => {
		let redirect: any;

		beforeEach(() => {
			redirect = component.find(Redirect);
		});

		it('should redirect from all the paths', () => {
			expect(redirect.props().from).toEqual('/');
		});

		it('should redirect to main', () => {
			expect(redirect.props().to).toEqual('/main');
		});
	});

	describe('getScenariosPageRoute', () => {
		it('should return a ScenariosPage component', () => {
			expect(component.instance().getScenariosPageRoute()).toEqual(<ScenariosPage />);
		});
	});

	describe('getStepsPageRoute', () => {
		it('should return a StepsPage component', () => {
			expect(component.instance().getStepsPageRoute()).toEqual(<StepsPage />);
		});
	});

	describe('getScenarioDetailsPageRoute', () => {
		it('should return a ScenarioDetailsPage component', () => {
			expect(component.instance().getScenarioDetailsPageRoute()).toEqual(<ScenarioDetailsPage />);
		});
	});
});
