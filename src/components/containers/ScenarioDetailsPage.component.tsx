import { connect, Dispatch } from 'react-redux';
import { withRouter } from 'react-router';
import StoreState from 'models/StoreState';
import ScenarioDetails from '../presentationals/ScenarioDetails.component';

const mapStateToProps = (state: StoreState, ownProps: any) => {
	return {
		scenario: state.selectedScenario
	};
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({});

const ScenarioDetailsPage = connect(mapStateToProps, mapDispatchToProps)(ScenarioDetails);

export default ScenarioDetailsPage;
