import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import TotalDuration from './TotalDuration.component';
import { Row, Col, Alert } from 'reactstrap';

let component: any;

describe('TotalDuration Presentational Component', () => {
	beforeEach(() => {
		component = shallow(<TotalDuration totalDuration={10} />);
	});

	describe('Component', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});
	});

	describe('Render', () => {
		it('should define a Row component', () => {
			expect(component.find(Row)).toHaveLength(1);
		});

		it('should define a Col component', () => {
			expect(component.find(Col)).toHaveLength(1);
		});

		describe('Alert', () => {
			let alertElement: any;
			beforeEach(() => {
				alertElement = component.find(Alert);
			});

			it('should be defined', () => {
				expect(alertElement).toHaveLength(1);
			});

			it('should have the css classes', () => {
				expect(alertElement.hasClass('text-center-aligned')).toBeTruthy();
				expect(alertElement.hasClass('boldify')).toBeTruthy();
				expect(alertElement.hasClass('alert-total-duration')).toBeTruthy();
			});

			it('should have color prop', () => {
				expect(alertElement.props().color).toEqual('primary');
			});

			it('should display the proper text', () => {
				expect(alertElement.props().children).toContain('The total duration is ');
			});

			describe('duration', () => {
				let spanElement: any;
				beforeEach(() => {
					spanElement = component.find('span');
				});

				it('should be defined', () => {
					expect(spanElement).toHaveLength(1);
				});

				it('should display the propert text', () => {
					expect(spanElement.text()).toEqual('10 seconds');
				});
			});
		});
	});
});
