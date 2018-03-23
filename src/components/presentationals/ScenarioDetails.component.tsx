import * as React from 'react';
import ScenarioData from 'models/ScenarioData';
import StepData from 'models/StepData';
import { Row, Col } from 'reactstrap';
import PerformancesBarChart from './PerformancesBarChart.component';

interface IScenarioDetailsProps {
	selectedScenario: ScenarioData;
}

class ScenarioDetails extends React.Component<IScenarioDetailsProps> {
	constructor(props: IScenarioDetailsProps) {
		super(props);
	}

	public render() {
		const scenariosChartData = this.props.selectedScenario.steps.map((step: StepData, index: number) => ({
			title: step.name,
			subTitle: '',
			x: `${+(index + 1)}`,
			y: step.duration
		}));

		return (
			<section>
				<Row>
					<Col>
						<b>{this.props.selectedScenario.name}</b>
					</Col>
				</Row>
				<Row>
					<Col>
						<i>{this.props.selectedScenario.filePath}</i>
					</Col>
				</Row>
				<Row>
					<Col>{this.props.selectedScenario.duration} seconds</Col>
				</Row>
				<br />
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
