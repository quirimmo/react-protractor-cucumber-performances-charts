import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import LongestStep from './LongestStep.component';

let component: any;

describe('LongestStep Presentational Component', () => {
	beforeEach(() => {
		component = shallow(<LongestStep longestStep="10" />);
	});

	describe('Component', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});

		describe('Alert', () => {
			let alertElement: any;
			beforeEach(() => {
				alertElement = component.find('Alert');
			});

			it('should be defined', () => {
				expect(alertElement).toBeDefined();
			});

			it('should have the proper classes', () => {
				expect(alertElement.hasClass('text-center-aligned')).toBeTruthy();
				expect(alertElement.hasClass('boldify')).toBeTruthy();
				expect(alertElement.hasClass('alert-total-duration')).toBeTruthy();
			});

			it('should have the proper text', () => {
				expect(alertElement.props().children).toContain('The longest step is: ');
			});
		});

		describe('span', () => {
			let spanElement: any;
			beforeEach(() => {
				spanElement = component.find('span');
			});

			it('should be defined', () => {
				expect(spanElement).toBeDefined();
			});

			it('should have the proper text', () => {
				expect(spanElement.text()).toContain('10 seconds');
			});
		});
	});
});
