import ScenarioData from './../models/ScenarioData';

const selectScenario = (state: ScenarioData, action: any): ScenarioData => {
	switch (action.type) {
		case 'SELECT_SCENARIO':
			return action.selectedScenario;
		default:
			return state;
	}
};

export default selectScenario;
