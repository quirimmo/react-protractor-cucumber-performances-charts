import { connect, Dispatch } from 'react-redux';

// import Main from './../presentationals/Main.component';
// import ScenarioData from 'models/ScenarioData';
import StoreState from 'models/StoreState';
import Steps from './../presentationals/Steps.component';

const mapStateToProps = (state: StoreState, ownProps: any) => {
	// const scenariosChartData = ownProps.scenarios.map((scenario: ScenarioData, index: number) => ({
	// 	name: scenario.name,
	// 	file: scenario.filePath,
	// 	x: `${+(index + 1)}`,
	// 	y: scenario.duration
	// }));
	// return {
	// 	scenariosChartData
	// };
	return {};
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
});

const StepsPage = connect(mapStateToProps, mapDispatchToProps)(Steps);

export default StepsPage;
