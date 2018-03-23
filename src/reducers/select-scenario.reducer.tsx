import ScenarioData from './../models/ScenarioData';

const selectScenario = (state: ScenarioData | null = null, action: any): any => {
	switch (action.type) {
		case 'SELECT_SCENARIO':
			return action.selectedScenario;
		default:
			return state;
	}
};

export default selectScenario;
