import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import StoreState from 'models/StoreState';

import 'bootstrap/dist/css/bootstrap.css';
import './../../../assets/styles/main.scss';
import AppTitle from './AppTitle.component';
import AppNavigation from './AppNavigation.component';
import AppMainContent from './AppMainContent.component';

class App extends React.Component<{}, StoreState> {
	constructor(props: {}) {
		super(props);
	}

	public render() {
		return (
			<BrowserRouter>
				<Container className="main-app-wrapper">
					<AppTitle />
					<br />
					<AppNavigation />
					<br />
					<AppMainContent />
				</Container>
			</BrowserRouter>
		);
	}
}

export default App;
