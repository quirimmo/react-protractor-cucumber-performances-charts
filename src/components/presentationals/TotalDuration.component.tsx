import * as React from 'react';
import { Alert } from 'reactstrap';

export interface ITotalDurationProps {
	totalDuration: number;
}

class TotalDuration extends React.Component<ITotalDurationProps> {
	constructor(props: ITotalDurationProps) {
		super(props);
	}

	public render() {
		return (
			<Alert className="text-center-aligned boldify alert-total-duration" color="primary">
				The total duration is <span>{this.props.totalDuration} seconds</span>
			</Alert>
		);
	}
}

export default TotalDuration;
