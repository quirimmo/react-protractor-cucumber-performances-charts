import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import StoreState from 'models/StoreState';
import { Container, Row, Col, Badge } from 'reactstrap';

import MainPage from './../containers/MainPage.component';
import StepsPage from './../containers/StepsPage.component';
import ScenarioData from 'models/ScenarioData';
import StepData from 'models/StepData';
import ScenarioDetailsPage from '../containers/ScenarioDetailsPage.component';
import TotalDuration from './TotalDuration.component';

import 'bootstrap/dist/css/bootstrap.css';
import './../../../assets/styles/main.scss';

export interface IAppProps {
	scenarios: ScenarioData[];
	steps: StepData[];
	totalDuration: number;
}

class App extends React.Component<IAppProps, StoreState> {
	constructor(props: IAppProps) {
		super(props);
		this.getScenariosPageRoute = this.getScenariosPageRoute.bind(this);
		this.getStepsPageRoute = this.getStepsPageRoute.bind(this);
		this.getScenarioDetailsPageRoute = this.getScenarioDetailsPageRoute.bind(this);
	}

	public getScenariosPageRoute(routeProps: object) {
		return <MainPage scenarios={this.props.scenarios} totalDuration={this.props.totalDuration} />;
	}

	public getStepsPageRoute(routeProps: object) {
		return <StepsPage steps={this.props.steps} />;
	}

	public getScenarioDetailsPageRoute(routeProps: object) {
		return <ScenarioDetailsPage />;
	}

	public render() {
		return (
			<BrowserRouter>
				<Container className="main-app-wrapper">
					<Row>
						<Col>
							<h2 className="main-app-title">
								<Badge color="secondary">Protractor Cucumber Performances Charts</Badge>
							</h2>
						</Col>
					</Row>
					<br />
					<Row>
						<Col sm="2">
							<NavLink to="/main">Scenarios Page</NavLink>
						</Col>
						<Col sm="2">
							<NavLink to="/steps">Steps Page</NavLink>
						</Col>
					</Row>
					<br />
					<Row>
						<Col className="page-content-wrapper">
							<Switch>
								<Route path="/main" render={this.getScenariosPageRoute} />
								<Route path="/steps" render={this.getStepsPageRoute} />
								<Route path="/scenario-details" render={this.getScenarioDetailsPageRoute} />
								<Redirect from="/" to="main" />
							</Switch>
						</Col>
					</Row>
				</Container>
			</BrowserRouter>
		);
	}
}

export default App;
