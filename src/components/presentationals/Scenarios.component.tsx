import * as React from 'react';
import ScenarioData from 'models/ScenarioData';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { IBarChartData } from './PerformancesBarChart.component';
import { IPieChartData } from './PerformancesPieChart.component';
import TabHeaderButtons from './TabHeaderButtons.component';
import TabBodyPanes from './TabBodyPanes.component';
import PerformancesChartTabs from './PerformancesChartTabs.component';
import ScenarioListGroup from './ScenarioListGroup.component';
import TotalDurationContainer from '../containers/TotalDurationContainer.component';

interface IMainProps {
	scenarios: ScenarioData[];
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
		return (
			<Container>
				<TotalDurationContainer />
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
