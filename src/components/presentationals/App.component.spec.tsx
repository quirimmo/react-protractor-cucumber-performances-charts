import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import App from './App.component';
import { shallow } from 'enzyme';

it('fake', () => {
	const component = shallow(<App />);
	expect(component).toBeDefined();
	// expect(result).toBeTruthy();
});
