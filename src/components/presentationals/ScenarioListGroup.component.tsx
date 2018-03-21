import * as React from 'react';
import { Row, Col, Button, Collapse, ListGroup, ListGroupItem } from 'reactstrap';
import { IBarChartData } from './PerformancesBarChart.component';
import { NavLink } from 'react-router-dom';
import ScenarioData from 'models/ScenarioData';

export interface IScenarioListGroupProps {
	scenarios: ScenarioData[];
	scenariosChartData: IBarChartData[];
	onSelectScenario: (selectedScenario: any) => void;
}

interface IScenarioListGroupState {
	collapse: boolean;
}

class ScenarioListGroup extends React.Component<IScenarioListGroupProps, IScenarioListGroupState> {
	constructor(props: IScenarioListGroupProps) {
		super(props);
		this.state = { collapse: false };

		this.props.onSelectScenario(null);

		this.onSelectScenario = this.onSelectScenario.bind(this);
		this.toggle = this.toggle.bind(this);
		this.getAllScenariosListItems = this.getAllScenariosListItems.bind(this);
	}

	public onSelectScenario(i: number) {
		this.props.onSelectScenario(this.props.scenarios[i]);
	}

	public toggle() {
		this.setState({ collapse: !this.state.collapse });
	}

	public getAllScenariosListItems() {
		return this.props.scenariosChartData.map((el, index) => (
			<ListGroupItem key={index}>
				<NavLink onClick={this.onSelectScenario.bind(this, index)} to="/scenario-details">
					{el.title} [{el.subTitle}]
				</NavLink>
			</ListGroupItem>
		));
	}

	public render() {
		return (
			<section>
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
			</section>
		);
	}
}

export default ScenarioListGroup;
