import * as React from 'react';
import { Alert } from 'reactstrap';

export interface ILongestStepProps {
	longestStep: string;
}

class LongestStep extends React.Component<ILongestStepProps> {
	constructor(props: ILongestStepProps) {
		super(props);
	}

	public render() {
		return (
			<Alert className="text-center-aligned boldify alert-total-duration" color="primary">
				The longest step is: <span>{this.props.longestStep} seconds</span>
			</Alert>
		);
	}
}

export default LongestStep;
