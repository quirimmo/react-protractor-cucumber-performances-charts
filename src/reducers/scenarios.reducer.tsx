import ScenarioData from './../models/ScenarioData';

const scenarios = (state: ScenarioData[] = [], action: any): ScenarioData[] => {
	switch (action.type) {
		case 'FETCH_SCENARIOS':
			return [...state, ...action.scenarios];
		default:
			return state;
	}
};

export default scenarios;
