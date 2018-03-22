import { connect, Dispatch } from 'react-redux';
import App from './../presentationals/App.component';
import StoreState from 'models/StoreState';
import PerformancesResultsReader from './../../models/PerformancesResultsReader';
import StatisticsResultsReader from './../../models/StatisticsResultsReader';

const mapStateToProps = (state: StoreState, ownProps: any) => {
	const performancesResultsReader = new PerformancesResultsReader();
	performancesResultsReader.read();
	const statisticsResultsReader = new StatisticsResultsReader();
	statisticsResultsReader.read();

	state.scenarios = performancesResultsReader.getScenarios();
	state.steps = statisticsResultsReader.getSteps();
	state.totalDuration = performancesResultsReader.getTotalDuration();
	return {};
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({});

const AppPage = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppPage;
