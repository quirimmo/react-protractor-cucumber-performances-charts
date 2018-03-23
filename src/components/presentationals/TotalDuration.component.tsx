import * as React from 'react';
import { Row, Col, Alert } from 'reactstrap';

export interface ITotalDurationProps {
	totalDuration: number;
}

class TotalDuration extends React.Component<ITotalDurationProps> {
	constructor(props: ITotalDurationProps) {
		super(props);
	}

	public render() {
		return (
			<Row>
				<Col sm={{ size: 6, offset: 3 }}>
					<Alert className="text-center-aligned boldify alert-total-duration" color="primary">
						The total duration is <span>{this.props.totalDuration} seconds</span>
					</Alert>
				</Col>
			</Row>
		);
	}
}

export default TotalDuration;
