import { connect, Dispatch } from 'react-redux';
import { fetchScenarios, fetchTotalDuration } from './../../actions/scenarios.action';
import App from './../presentationals/App.component';
import ScenarioData from 'models/ScenarioData';
import StoreState from 'models/StoreState';
import PerformancesResultsReader from './../../models/PerformancesResultsReader';
import StatisticsResultsReader from './../../models/StatisticsResultsReader';

const mapStateToProps = (state: StoreState, ownProps: any) => {
	const performancesResultsReader = new PerformancesResultsReader();
	performancesResultsReader.read();
	const scenarios = performancesResultsReader.getScenarios();
	const totalDuration = performancesResultsReader.getTotalDuration();
	const statisticsResultsReader = new StatisticsResultsReader();
	statisticsResultsReader.read();
	const steps = statisticsResultsReader.getSteps();

	state.scenarios = scenarios;
	state.steps = steps;
	state.totalDuration = totalDuration;
	return {
		scenarios: state.scenarios,
		steps: state.steps,
		totalDuration: state.totalDuration
	};
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
});

const AppPage = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppPage;
