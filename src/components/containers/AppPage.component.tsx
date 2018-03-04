import { connect, Dispatch } from 'react-redux';
import { fetchScenarios, fetchTotalDuration } from './../../actions/scenarios.action';
import App from './../presentationals/App.component';
import ScenarioData from 'models/ScenarioData';
import StoreState from 'models/StoreState';

const mapStateToProps = (state: StoreState, ownProps: any) => ({
	scenarios: state.scenarios,
	totalDuration: state.totalDuration
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
	onFetchScenarios: (scenarios: ScenarioData[]) => {
		dispatch(fetchScenarios(scenarios));
	},
	onFetchTotalDuration: (totalDuration: number) => {
		dispatch(fetchTotalDuration(totalDuration));
	}
});

const AppPage = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppPage;
