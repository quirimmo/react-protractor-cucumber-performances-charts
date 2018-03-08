import * as React from 'react';
import ScenarioData from 'models/ScenarioData';

interface IScenarioDetailsProps {
	scenario: ScenarioData
}


class ScenarioDetails extends React.Component<IScenarioDetailsProps> {
	constructor(props: IScenarioDetailsProps) {
		super(props);
	}


	public render() {
		return (
			<div>{this.props.scenario.name}</div>
		);
	}
}

export default ScenarioDetails;
