import { connect, Dispatch } from 'react-redux';
import Main from './../presentationals/Main.component';
import ScenarioData from 'models/ScenarioData';
import StoreState from 'models/StoreState';
import { selectScenario } from './../../actions/scenarios.action';


const mapStateToProps = (state: StoreState, ownProps: any) => {
	const scenariosChartData = ownProps.scenarios.map((scenario: ScenarioData, index: number) => ({
		name: scenario.name,
		file: scenario.filePath,
		x: `${+(index + 1)}`,
		y: scenario.duration
	}));
	state.selectedScenario = null;
	return {
		scenariosChartData,
		selectedScenario: state.selectedScenario
	};
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
	onSelectScenario: (selectedScenario: any) => { dispatch(selectScenario(selectedScenario)); }
});

const MainPage = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainPage;
