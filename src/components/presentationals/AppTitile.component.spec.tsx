import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Badge, Row, Col } from 'reactstrap';
import AppTitle from './AppTitle.component';

let component: any;

describe('AppTitle Presentational Component', () => {
	beforeEach(() => {
		component = shallow(<AppTitle />);
	});

	describe('Component', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});

		it('should define the header section', () => {
			expect(component.find('header')).toHaveLength(1);
		});

		it('should define a Row element', () => {
			expect(component.find(Row)).toHaveLength(1);
		});

		it('should define a Col element', () => {
			expect(component.find(Col)).toHaveLength(1);
		});

		describe('h2', () => {
			let h2: any;
			beforeEach(() => {
				h2 = component.find('h2');
			});

			it('should be defined', () => {
				expect(h2).toHaveLength(1);
			});

			it('should have the proper class', () => {
				expect(h2.hasClass('main-app-title')).toBeTruthy();
			});
		});


		describe('Badge', () => {
			let badgeElement: any;
			beforeEach(() => {
				badgeElement = component.find(Badge);
			});

			it('should be defined', () => {
				expect(badgeElement).toHaveLength(1);
			});

			it('should have the proper color prop', () => {
				expect(badgeElement.props().color).toEqual('secondary');
			});

			it('should have the proper color prop', () => {
				expect(badgeElement.props().children).toEqual('Protractor Cucumber Performances Charts');
			});
		});
	});
});
