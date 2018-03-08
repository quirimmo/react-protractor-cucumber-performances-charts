import { connect, Dispatch } from 'react-redux';
import StoreState from 'models/StoreState';
import ScenarioDetails from '../presentationals/ScenarioDetails.component';


const mapStateToProps = (state: StoreState, ownProps: any) => ({
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
});

const ScenarioDetailsPage = connect(mapStateToProps, mapDispatchToProps)(ScenarioDetails);

export default ScenarioDetailsPage;
