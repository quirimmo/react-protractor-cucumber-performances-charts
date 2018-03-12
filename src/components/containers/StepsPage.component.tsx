import { connect, Dispatch } from 'react-redux';
import StepData from 'models/StepData';
import StoreState from 'models/StoreState';
import Steps from './../presentationals/Steps.component';

const mapStateToProps = (state: StoreState, ownProps: any) => {
	const stepsChartData = ownProps.steps.map((step: StepData, index: number) => ({
		name: step.name,
		x: `${+(index + 1)}`,
		y: step.duration
	}));
	return {
		stepsChartData
	};
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({});

const StepsPage = connect(mapStateToProps, mapDispatchToProps)(Steps);

export default StepsPage;
