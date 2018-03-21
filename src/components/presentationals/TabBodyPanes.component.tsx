import * as React from 'react';
import { TabPane, Col, Row, TabContent } from 'reactstrap';
import PerformancesBarChart, { IBarChartData } from './PerformancesBarChart.component';
import PerformancesPieChart, { IPieChartData } from './PerformancesPieChart.component';

export interface ITabBodyPanesProps {
	activeTab: string;
	scenariosChartData: IBarChartData[];
	scenariosPieChartData: IPieChartData[];
}

class TabBodyPanes extends React.Component<ITabBodyPanesProps> {
	constructor(props: ITabBodyPanesProps) {
		super(props);
	}

	public render() {
		return (
			<TabContent activeTab={this.props.activeTab}>
				<TabPane tabId="1">
					<Row>
						<Col>
							<PerformancesBarChart slicesSize={15} data={this.props.scenariosChartData} titleYAxis="Seconds" titleXAxis="Scenarios" />
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
		);
	}
}

export default TabBodyPanes;
