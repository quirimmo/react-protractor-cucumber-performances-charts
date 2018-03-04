import { connect, Dispatch } from 'react-redux';
import { fetchScenarios } from './../../actions/scenarios.action';
import App from './../presentationals/App.component';
import ScenarioData from 'models/ScenarioData';
import StoreState from 'models/StoreState';

const mapStateToProps = (state: StoreState, ownProps: any) => ({
	scenarios: state.scenarios
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
	onFetchScenarios: (scenarios: ScenarioData[]) => {
		dispatch(fetchScenarios(scenarios));
	}
});

const AppPage = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppPage;
