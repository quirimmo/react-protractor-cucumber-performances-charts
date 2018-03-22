import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PerformancesBarChart, { IBarChartData } from './PerformancesBarChart.component';
import LongestStep from './LongestStep.component';

interface IStepsProps {
	stepsChartData: IBarChartData[];
}

class Steps extends React.Component<IStepsProps> {
	constructor(props: IStepsProps) {
		super(props);
	}

	public render() {
		return (
			<Container>
				<Row>
					<Col>
						<LongestStep longestStep={this.props.stepsChartData[0].title} />
					</Col>
				</Row>
				<Row>
					<Col>
						<PerformancesBarChart slicesSize={15} data={this.props.stepsChartData} titleYAxis="Seconds" titleXAxis="Steps" />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Steps;
