import ScenarioData from './../models/ScenarioData';

export const fetchScenarios = (scenarios: ScenarioData[]) => ({
	type: 'FETCH_SCENARIOS',
	scenarios
});
