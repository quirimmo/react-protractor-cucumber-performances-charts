/* global window, document, React */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import history from './main-history';

import App from './App.component';

ReactDOM.render(
	<Router history={history}>
		<App />
	</Router>,
	document.getElementById('app') as HTMLElement
);

// import App from './App.component.jsx';
// import reducers from './reducers.jsx';

// const store = createStore(
// 	reducers,
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// render(
// 	<Provider store={store}>
// 		<Router history={history}>
// 			<App />
// 		</Router>
// 	</Provider>,
// 	document.getElementById('app')
// );
