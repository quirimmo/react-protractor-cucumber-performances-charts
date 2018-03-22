import { connect, Dispatch } from 'react-redux';
import StoreState from 'models/StoreState';
import ScenarioListGroup from '../presentationals/ScenarioListGroup.component';
import { selectScenario } from './../../actions/scenarios.action';

const mapStateToProps = (state: StoreState, ownProps: any) => ({
	scenarios: state.scenarios
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
	onSelectScenario: (selectedScenario: any) => {
		dispatch(selectScenario(selectedScenario));
	}
});

const ScenarioListGroupContainer = connect(mapStateToProps, mapDispatchToProps)(ScenarioListGroup);

export default ScenarioListGroupContainer;
