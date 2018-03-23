import { connect, Dispatch } from 'react-redux';
import StoreState from 'models/StoreState';
import TotalDuration from '../presentationals/TotalDuration.component';

const mapStateToProps = (state: StoreState, ownProps: any) => ({
	totalDuration: state.totalDuration
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({});

const TotalDurationContainer = connect(mapStateToProps, mapDispatchToProps)(TotalDuration);

export default TotalDurationContainer;
