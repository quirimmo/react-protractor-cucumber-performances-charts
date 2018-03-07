import * as React from 'react';
import { IStepChartObject } from 'models/StepData';
import { Container, Row, Col } from 'reactstrap';
import AllStepsBarChart from './AllStepsBarChart.component';

interface IStepsProps {
	stepsChartData: IStepChartObject[];
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
						<AllStepsBarChart steps={this.props.stepsChartData} />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Steps;
