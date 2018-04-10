import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import ScenariosPage from './../containers/ScenariosPage.component';
import StepsPage from './../containers/StepsPage.component';
import ScenarioDetailsPage from '../containers/ScenarioDetailsPage.component';

class AppMainContent extends React.Component<{}> {
	constructor(props: {}) {
		super(props);

		this.getScenariosPageRoute = this.getScenariosPageRoute.bind(this);
		this.getStepsPageRoute = this.getStepsPageRoute.bind(this);
		this.getScenarioDetailsPageRoute = this.getScenarioDetailsPageRoute.bind(this);
	}

	public getScenariosPageRoute(routeProps: object) {
		return <ScenariosPage />;
	}

	public getStepsPageRoute(routeProps: object) {
		return <StepsPage />;
	}

	public getScenarioDetailsPageRoute(routeProps: object) {
		return <ScenarioDetailsPage />;
	}

	public render() {
		return (
			<section className="main-content-section">
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
			</section>
		);
	}
}

export default AppMainContent;
