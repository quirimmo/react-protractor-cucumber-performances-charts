import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import StoreState from 'models/StoreState';
import ScenarioData from 'models/ScenarioData';
import StepData from 'models/StepData';
import 'bootstrap/dist/css/bootstrap.css';
import './../../../assets/styles/main.scss';
import AppTitle from './AppTitle.component';
import AppNavigation from './AppNavigation.component';
import AppMainContent from './AppMainContent.component';

export interface IAppProps {
	scenarios: ScenarioData[];
	steps: StepData[];
	totalDuration: number;
}

class App extends React.Component<IAppProps, StoreState> {
	constructor(props: IAppProps) {
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
					<AppMainContent scenarios={this.props.scenarios} steps={this.props.steps} totalDuration={this.props.totalDuration} />
				</Container>
			</BrowserRouter>
		);
	}
}

export default App;
