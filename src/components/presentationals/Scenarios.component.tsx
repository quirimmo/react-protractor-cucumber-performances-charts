import * as React from 'react';
import ScenarioData from 'models/ScenarioData';
import { Container, Row, Col, Collapse, Button, ListGroup, ListGroupItem, TabContent, TabPane } from 'reactstrap';
import TotalDuration from './TotalDuration.component';
import { NavLink } from 'react-router-dom';
import PerformancesBarChart, { IBarChartData } from './PerformancesBarChart.component';
import PerformancesPieChart, { IPieChartData } from './PerformancesPieChart.component';

interface IMainProps {
	scenarios: ScenarioData[];
	totalDuration: number;
	scenariosChartData: IBarChartData[];
	scenariosPieChartData: IPieChartData[];
	selectedScenario: any;
	onSelectScenario: (selectedScenario: any) => void;
}

interface IScenariosPageState {
	collapse: boolean;
	activeTab: string;
}

class Main extends React.Component<IMainProps, IScenariosPageState> {
	constructor(props: IMainProps) {
		super(props);
		this.state = { collapse: false, activeTab: '1' };
		this.toggle = this.toggle.bind(this);
		this.toggleTab = this.toggleTab.bind(this);
		this.getAllScenariosListItems = this.getAllScenariosListItems.bind(this);
		this.onSelectScenario = this.onSelectScenario.bind(this);
		this.props.onSelectScenario(null);
	}

	public onSelectScenario(i: number) {
		this.props.onSelectScenario(this.props.scenarios[i]);
	}

	public toggle() {
		this.setState({ collapse: !this.state.collapse });
	}

	public toggleTab(tab: string) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
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
		const data = [{ x: 'SomethingA', y: 10 }, { x: 'SomethingB', y: 4 }, { x: 'SomethingC', y: 3 }];

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
						<ul className="tabs-buttons-wrapper">
							<li>
								<Button
									color="secondary"
									className={`tabs-buttons ${this.state.activeTab === '1' ? 'tab-button-active' : ''}`}
									onClick={() => {
										this.toggleTab('1');
									}}
								>
									Bar Chart
								</Button>
							</li>
							<li>
								<Button
									color="secondary"
									className={`tabs-buttons ${this.state.activeTab === '2' ? 'tab-button-active' : ''}`}
									onClick={() => {
										this.toggleTab('2');
									}}
								>
									Pie Chart
								</Button>
							</li>
						</ul>
						<TabContent activeTab={this.state.activeTab}>
							<TabPane tabId="1">
								<Row>
									<Col>
										<PerformancesBarChart
											slicesSize={15}
											data={this.props.scenariosChartData}
											titleYAxis="Seconds"
											titleXAxis="Scenarios"
										/>
									</Col>
								</Row>
							</TabPane>
							<TabPane tabId="2">
								<Row>
									<Col>
										<PerformancesPieChart slicesSize={15} data={this.props.scenariosPieChartData} />
									</Col>
								</Row>
							</TabPane>
						</TabContent>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Main;
