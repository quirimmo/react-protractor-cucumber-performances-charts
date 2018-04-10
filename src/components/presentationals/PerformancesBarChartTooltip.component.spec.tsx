import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import PerformancesBarChartTooltip from './PerformancesBarChartTooltip.component';

let component: any;

describe('PerformancesBarChartTooltip Presentational Component', () => {
	describe('General', () => {
		beforeEach(() => {
			component = shallow(<PerformancesBarChartTooltip title="Title" subTitle="Sub Title" y={1} />);
		});

		describe('Component', () => {
			it('should be defined', () => {
				expect(component).toBeDefined();
			});

			it('should define the main div', () => {
				const mainDiv = component.find('div');
				expect(mainDiv).toHaveLength(1);
				expect(mainDiv.hasClass('wrapper-scenario-chart-tooltip')).toBeTruthy();
			});

			it('should define the tooltip title', () => {
				const titleElement = component.find('h3');
				expect(titleElement).toBeDefined();
				expect(titleElement.text()).toEqual('Title');
			});

			it('should define the sub title', () => {
				const subTitleElement = component.find('h4');
				expect(subTitleElement).toBeDefined();
				expect(subTitleElement.hasClass('single-scenario-file')).toBeTruthy();
				expect(subTitleElement.text()).toEqual('Sub Title');
			});

			it('should define the duration', () => {
				const durationElement = component.find('h5');
				expect(durationElement).toBeDefined();
				expect(durationElement.hasClass('single-scenario-duration')).toBeTruthy();
				expect(durationElement.text()).toEqual('1 seconds');
			});
		});
	});

	describe('General', () => {
		beforeEach(() => {
			component = shallow(<PerformancesBarChartTooltip title="Title" subTitle="" y={1} />);
		});

		describe('Component', () => {
			it('should be defined', () => {
				expect(component).toBeDefined();
			});

			it('should not define the sub title', () => {
				const subTitleElement = component.find('h4');
				expect(subTitleElement).toHaveLength(0);
			});
		});
	});
});
