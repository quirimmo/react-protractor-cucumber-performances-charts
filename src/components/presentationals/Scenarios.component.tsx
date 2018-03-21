import * as React from 'react';
import ScenarioData from 'models/ScenarioData';
import { Container, Row, Col } from 'reactstrap';
import TotalDuration from './TotalDuration.component';
import { NavLink } from 'react-router-dom';
import { IBarChartData } from './PerformancesBarChart.component';
import { IPieChartData } from './PerformancesPieChart.component';
import TabHeaderButtons from './TabHeaderButtons.component';
import TabBodyPanes from './TabBodyPanes.component';
import PerformancesChartTabs from './PerformancesChartTabs.component';
import ScenarioListGroup from './ScenarioListGroup.component';

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
}

class Main extends React.Component<IMainProps, IScenariosPageState> {
	constructor(props: IMainProps) {
		super(props);
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
				<ScenarioListGroup
					scenarios={this.props.scenarios}
					scenariosChartData={this.props.scenariosChartData}
					onSelectScenario={this.props.onSelectScenario}
				/>
				<br />
				<PerformancesChartTabs scenariosChartData={this.props.scenariosChartData} scenariosPieChartData={this.props.scenariosPieChartData} />
			</Container>
		);
	}
}

export default Main;
