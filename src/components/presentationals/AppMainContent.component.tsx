import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import StoreState from 'models/StoreState';
import ScenariosPage from './../containers/ScenariosPage.component';
import StepsPage from './../containers/StepsPage.component';
import ScenarioDetailsPage from '../containers/ScenarioDetailsPage.component';
import ScenarioData from 'models/ScenarioData';
import StepData from 'models/StepData';

export interface IAppProps {
	scenarios: ScenarioData[];
	steps: StepData[];
	totalDuration: number;
}

class AppMainContent extends React.Component<IAppProps> {
	constructor(props: IAppProps) {
		super(props);
		this.getScenariosPageRoute = this.getScenariosPageRoute.bind(this);
		this.getStepsPageRoute = this.getStepsPageRoute.bind(this);
		this.getScenarioDetailsPageRoute = this.getScenarioDetailsPageRoute.bind(this);
	}

	public getScenariosPageRoute(routeProps: object) {
		return <ScenariosPage scenarios={this.props.scenarios} totalDuration={this.props.totalDuration} />;
	}

	public getStepsPageRoute(routeProps: object) {
		return <StepsPage steps={this.props.steps} />;
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
