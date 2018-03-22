import * as React from 'react';
import { Container } from 'reactstrap';
import { IBarChartData } from './PerformancesBarChart.component';
import { IPieChartData } from './PerformancesPieChart.component';
import PerformancesChartTabs from './PerformancesChartTabs.component';
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
