import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import PerformancesResultsReader from './../../models/PerformancesResultsReader';
import ScenarioData from 'models/ScenarioData';
import StoreState from 'models/StoreState';
import { Container, Row, Col, Badge, Nav, NavItem } from 'reactstrap';
import TotalDuration from './TotalDuration.component';
import IAllScenariosBarChart from './AllScenariosBarChart.component';

import 'bootstrap/dist/css/bootstrap.css';
import './../../../assets/styles/main.scss';
import AllScenariosBarChart from './AllScenariosBarChart.component';
import Main from './Main.component';
import MainPage from './../containers/MainPage.component';

export interface IAppProps {
	scenarios: ScenarioData[];
	totalDuration: number;
	onFetchScenarios: (scenarios: ScenarioData[]) => void;
	onFetchTotalDuration: (duration: number) => void;
}

class App extends React.Component<IAppProps, StoreState> {
	constructor(props: IAppProps) {
		super(props);
		this.getMainPageRoute = this.getMainPageRoute.bind(this);
	}

	public getMainPageRoute(routeProps: object) {
		return <MainPage scenarios={this.props.scenarios} totalDuration={this.props.totalDuration} />;
	}

	public render() {
		return (
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
					<Col>
						<Nav>
							<NavItem>
								<NavLink to="/main">Main Page</NavLink>
							</NavItem>
						</Nav>
					</Col>
				</Row>
				<br />
				<Row>
					<Col>
						<BrowserRouter>
							<Switch>
								<Route path="/main" render={this.getMainPageRoute} />
								{/* <Route path="/main" render={this.getMainPageRoute} /> */}
								<Redirect from="/" to="main" />
							</Switch>
						</BrowserRouter>
					</Col>
				</Row>
				<br />
			</Container>
		);
	}
}

export default App;
