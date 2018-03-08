import * as React from 'react';
import ScenarioData, { IScenarioChartObject } from 'models/ScenarioData';
import { Container, Row, Col, Collapse, Button, ListGroup, ListGroupItem } from 'reactstrap';
import TotalDuration from './TotalDuration.component';
import AllScenariosBarChart from './AllScenariosBarChart.component';

interface IMainProps {
	totalDuration: number;
	scenariosChartData: IScenarioChartObject[];
}

interface IScenariosPageState {
	collapse: boolean;
}

class Main extends React.Component<IMainProps, IScenariosPageState> {
	constructor(props: IMainProps) {
		super(props);
		this.state = { collapse: false };
		this.toggle = this.toggle.bind(this);
		this.getAllScenariosListItems = this.getAllScenariosListItems.bind(this);
	}

	public toggle() {
		this.setState({ collapse: !this.state.collapse });
	}

	public getAllScenariosListItems() {
		return this.props.scenariosChartData.map((el, index) => (
			<ListGroupItem key={index}>
				{el.name} [{el.file}]
			</ListGroupItem>
		));
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
					<Col sm={{ size: 2, offset: 5 }}>
						<Button color="primary" onClick={this.toggle}>
							Show All Scenarios
						</Button>
					</Col>
				</Row>
				<br />
				<Row>
					<Col>
						<Collapse isOpen={this.state.collapse}>
							<ListGroup>{this.getAllScenariosListItems()}</ListGroup>
						</Collapse>
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
