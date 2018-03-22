import { connect, Dispatch } from 'react-redux';
import Scenarios from './../presentationals/Scenarios.component';
import ScenarioData from 'models/ScenarioData';
import StoreState from 'models/StoreState';
import { selectScenario } from './../../actions/scenarios.action';

const mapStateToProps = (state: StoreState, ownProps: any) => {
	const scenariosChartData = state.scenarios.map((scenario: ScenarioData, index: number) => ({
		title: scenario.name,
		subTitle: scenario.filePath,
		x: `${+(index + 1)}`,
		y: scenario.duration
	}));
	const scenariosPieChartData = state.scenarios.map((scenario: ScenarioData, index: number) => ({
		x: scenario.name,
		y: scenario.duration
	}));

	return {
		scenariosChartData,
		scenariosPieChartData
	};
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({});

const ScenariosPage = connect(mapStateToProps, mapDispatchToProps)(Scenarios);

export default ScenariosPage;
