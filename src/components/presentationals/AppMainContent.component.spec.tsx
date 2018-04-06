import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import AppMainContent from './AppMainContent.component';
import { Row, Col } from 'reactstrap';
import { Route, Switch, Redirect } from 'react-router';

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
	});
	describe('Redirect', () => {
	});
	describe('getScenariosPageRoute', () => {
	});
	describe('getStepsPageRoute', () => {
	});
	describe('getScenarioDetailsPageRoute', () => {
	});
});
