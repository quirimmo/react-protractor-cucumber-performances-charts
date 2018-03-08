import ScenarioData from './../models/ScenarioData';

export const fetchScenarios = (scenarios: ScenarioData[]) => ({
	type: 'FETCH_SCENARIOS',
	scenarios
});

export const fetchTotalDuration = (duration: number) => ({
	type: 'FETCH_TOTAL_DURATION',
	duration
});

export const selectScenario = (selectedScenario: ScenarioData) => ({
	type: 'SELECT_SCENARIO',
	selectedScenario
});
