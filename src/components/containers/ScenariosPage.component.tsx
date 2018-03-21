import { connect, Dispatch } from 'react-redux';
import Scenarios from './../presentationals/Scenarios.component';
import ScenarioData from 'models/ScenarioData';
import StoreState from 'models/StoreState';
import { selectScenario } from './../../actions/scenarios.action';

const mapStateToProps = (state: StoreState, ownProps: any) => {
	const scenariosChartData = ownProps.scenarios.map((scenario: ScenarioData, index: number) => ({
		title: scenario.name,
		subTitle: scenario.filePath,
		x: `${+(index + 1)}`,
		y: scenario.duration
	}));
	const scenariosPieChartData = ownProps.scenarios.map((scenario: ScenarioData, index: number) => ({
		x: scenario.name,
		y: scenario.duration
	}));
	state.selectedScenario = null;
	return {
		scenariosChartData,
		scenariosPieChartData,
		selectedScenario: state.selectedScenario
	};
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
	onSelectScenario: (selectedScenario: any) => {
		dispatch(selectScenario(selectedScenario));
	}
});

const ScenariosPage = connect(mapStateToProps, mapDispatchToProps)(Scenarios);

export default ScenariosPage;
