import * as React from 'react';
import { Row, Col } from 'reactstrap';
import TabHeaderButtons from './TabHeaderButtons.component';
import TabBodyPanes from './TabBodyPanes.component';
import { IBarChartData } from './PerformancesBarChart.component';
import { IPieChartData } from './PerformancesPieChart.component';

export interface IPerformancesChartTabsProps {
	scenariosChartData: IBarChartData[];
	scenariosPieChartData: IPieChartData[];
}

interface IPerformancesChartTabsState {
	activeTab: string;
}

class PerformancesChartTabs extends React.Component<IPerformancesChartTabsProps, IPerformancesChartTabsState> {
	constructor(props: IPerformancesChartTabsProps) {
		super(props);
		this.state = { activeTab: '1' };

		this.toggleTab = this.toggleTab.bind(this);
	}

	public toggleTab(tab: string) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
	}

	public render() {
		return (
			<Row>
				<Col>
					<TabHeaderButtons activeTab={this.state.activeTab} toggleTab={this.toggleTab} />
					<TabBodyPanes
						activeTab={this.state.activeTab}
						scenariosChartData={this.props.scenariosChartData}
						scenariosPieChartData={this.props.scenariosPieChartData}
					/>
				</Col>
			</Row>
		);
	}
}

export default PerformancesChartTabs;
