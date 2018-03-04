import * as React from 'react';
import PerformancesResultsReader from './../../models/PerformancesResultsReader';
import ScenarioData from 'models/ScenarioData';
import StoreState from 'models/StoreState';

export interface IAppProps {
	scenarios: ScenarioData[];
	onFetchScenarios: (scenarios: ScenarioData[]) => void;
}

class App extends React.Component<IAppProps, StoreState> {
	constructor(props: IAppProps) {
		super(props);
		const performancesResultsReader = new PerformancesResultsReader();
		const scenarios = performancesResultsReader.read();
		this.props.onFetchScenarios(scenarios);
	}

	public render() {
		return <h2>Hello World!</h2>;
	}
}

export default App;
