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
import ScenarioListGroupContainer from '../containers/ScenarioListGroupContainer.component';

interface IMainProps {
	scenariosChartData: IBarChartData[];
	scenariosPieChartData: IPieChartData[];
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
				<ScenarioListGroupContainer scenariosChartData={this.props.scenariosChartData} />
				<br />
				<PerformancesChartTabs scenariosChartData={this.props.scenariosChartData} scenariosPieChartData={this.props.scenariosPieChartData} />
			</Container>
		);
	}
}

export default Main;
