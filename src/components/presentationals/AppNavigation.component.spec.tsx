import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import AppNavigation from './AppNavigation.component';

let component: any;

describe('AppNavigation Presentational Component', () => {
	beforeEach(() => {
		component = shallow(<AppNavigation />);
	});

	describe('Component', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});

		it('should define the nav section', () => {
			expect(component.find('nav')).toHaveLength(1);
		});

		it('should define a Row element', () => {
			expect(component.find(Row)).toHaveLength(1);
		});

		it('should define two Col elements', () => {
			expect(component.find(Col)).toHaveLength(2);
		});

		it('should define two Link elements', () => {
			expect(component.find(NavLink)).toHaveLength(2);
		});
	});


	describe('NavLink elements', () => {
		describe('Main NavLink', () => {
			let mainNavLink: any;
			beforeEach(() => {
				mainNavLink = component.find(NavLink).at(0);
			});

			it('should point to main', () => {
				expect(mainNavLink.props().to).toEqual('/main');
			});

			it('should display the proper text', () => {
				expect(mainNavLink.props().children).toEqual('Scenarios Page');
			});
		});

		describe('Steps NavLink', () => {
			let stepsNavLink: any;
			beforeEach(() => {
				stepsNavLink = component.find(NavLink).at(1);
			});

			it('should point to steps', () => {
				expect(stepsNavLink.props().to).toEqual('/steps');
			});

			it('should display the proper text', () => {
				expect(stepsNavLink.props().children).toEqual('Steps Page');
			});
		});
	});

});
