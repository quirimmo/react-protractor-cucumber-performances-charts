import * as React from 'react';
import PerformancesResultsReader from './../../models/PerformancesResultsReader';
import ScenarioData from 'models/ScenarioData';
import StoreState from 'models/StoreState';
import { Container, Row, Col, Badge } from 'reactstrap';
import TotalDuration from './TotalDuration.component';

import 'bootstrap/dist/css/bootstrap.css';
import './../../../assets/styles/main.scss';

export interface IAppProps {
	scenarios: ScenarioData[];
	totalDuration: number;
	onFetchScenarios: (scenarios: ScenarioData[]) => void;
	onFetchTotalDuration: (duration: number) => void;
}

class App extends React.Component<IAppProps, StoreState> {
	constructor(props: IAppProps) {
		super(props);
		const performancesResultsReader = new PerformancesResultsReader();
		performancesResultsReader.read();
		this.props.onFetchScenarios(performancesResultsReader.getScenarios());
		this.props.onFetchTotalDuration(performancesResultsReader.getTotalDuration());
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
				<br />
				<Row>
					<Col sm={{size: 6, offset: 3}}>
						<TotalDuration totalDuration={this.props.totalDuration} />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default App;
