import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import App from './App.component';
import { shallow, ShallowWrapper } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import AppTitle from './AppTitle.component';
import AppNavigation from './AppNavigation.component';
import AppMainContent from './AppMainContent.component';


let component: ShallowWrapper<any, any>;

describe('App Presentational Component', () => {
	beforeEach(() => {
		component = shallow(<App />);
	});

	it('should define the component', () => {
		expect(component).toBeDefined();
	});

	it('should contain the BrowserRouter', () => {
		expect(component.find(BrowserRouter)).toHaveLength(1);
	});

	it('should contain the Container with the CSS class', () => {
		const containerComponent = component.find(Container);
		expect(containerComponent).toHaveLength(1);
		expect(containerComponent.hasClass('main-app-wrapper')).toBeTruthy();
	});

	it('should contain the AppTitle', () => {
		expect(component.find(AppTitle)).toHaveLength(1);
	});

	it('should contain the AppNavigation', () => {
		expect(component.find(AppNavigation)).toHaveLength(1);
	});

	it('should contain the Container', () => {
		expect(component.find(AppMainContent)).toHaveLength(1);
	});

});

