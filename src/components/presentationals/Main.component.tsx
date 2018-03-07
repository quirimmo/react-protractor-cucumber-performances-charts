import * as React from 'react';
import ScenarioData, { IScenarioChartObject } from 'models/ScenarioData';
import { Container, Row, Col } from 'reactstrap';
import TotalDuration from './TotalDuration.component';
import AllScenariosBarChart from './AllScenariosBarChart.component';

interface IMainProps {
	totalDuration: number;
	scenariosChartData: IScenarioChartObject[];
}

class Main extends React.Component<IMainProps> {
	constructor(props: IMainProps) {
		super(props);
	}

	public render() {
		return (
			<Container>
				<Row>
					<Col sm={{ size: 6, offset: 3 }}>
						<TotalDuration totalDuration={this.props.totalDuration} />
					</Col>
				</Row>
				<br />
				<Row>
					<Col>
						<AllScenariosBarChart scenarios={this.props.scenariosChartData} />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Main;
