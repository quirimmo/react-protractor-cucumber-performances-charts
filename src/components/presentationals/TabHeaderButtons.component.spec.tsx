import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import TabHeaderButtons from './TabHeaderButtons.component';
import { Button } from 'reactstrap';

let component: any;
const toggleTab = jest.fn((tab: string) => {});

describe('TabBodyPanes Presentational Component', () => {
	beforeEach(() => {
		component = shallow(<TabHeaderButtons toggleTab={toggleTab} activeTab="1" />);
	});

	describe('General', () => {
		it('should define the component', () => {
			expect(component).toBeDefined();
		});

		it('should define the ul', () => {
			const ulElement = component.find('ul');
			expect(ulElement).toHaveLength(1);
			expect(ulElement.hasClass('tabs-buttons-wrapper')).toBeTruthy();
		});

		it('should define two li', () => {
			expect(component.find('li')).toHaveLength(2);
		});
	});

	describe('Button', () => {
		let buttonComponents: any;
		beforeEach(() => {
			buttonComponents = component.find(Button);
		});

		it('should be two defined', () => {
			expect(buttonComponents).toHaveLength(2);
		});

		it('should have the general class', () => {
			expect(buttonComponents.at(0).hasClass('tabs-buttons'))
		});

		it('should have the color prop', () => {
			expect(buttonComponents.at(0).props().color).toEqual('secondary');
		});

		it('should have the proper class if active', () => {
			expect(buttonComponents.at(0).hasClass('tab-button-active')).toBeTruthy();
			expect(buttonComponents.at(1).hasClass('tab-button-active')).toBeFalsy();
		});

		it('should call the toggle method on click', () => {
			buttonComponents.at(0).simulate('click');
			expect(toggleTab).toHaveBeenCalledWith('1');
		});
	});
});
