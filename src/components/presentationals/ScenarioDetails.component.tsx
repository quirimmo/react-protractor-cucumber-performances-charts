import * as React from 'react';
import ScenarioData from 'models/ScenarioData';
import { Row, Col } from 'reactstrap';
import PerformancesBarChart from './PerformancesBarChart.component';
import StepData from 'models/StepData';

interface IScenarioDetailsProps {
	scenario: ScenarioData;
}

class ScenarioDetails extends React.Component<IScenarioDetailsProps> {
	constructor(props: IScenarioDetailsProps) {
		super(props);
		console.log(this.props)
	}

	public render() {
		const scenariosChartData = this.props.scenario.steps.map((step: StepData, index: number) => ({
			title: step.name,
			subTitle: '',
			x: `${+(index + 1)}`,
			y: step.duration
		}));

		return (
			<section>
				<Row>
					<Col>{this.props.scenario.name}</Col>
				</Row>
				<Row>
					<Col>{this.props.scenario.filePath}</Col>
				</Row>
				<Row>
					<Col>{this.props.scenario.duration} seconds</Col>
				</Row>
				<Row>
					<Col>
						<PerformancesBarChart data={scenariosChartData} titleYAxis="Seconds" titleXAxis="Steps" />
					</Col>
				</Row>
			</section>
		);
	}
}

export default ScenarioDetails;
