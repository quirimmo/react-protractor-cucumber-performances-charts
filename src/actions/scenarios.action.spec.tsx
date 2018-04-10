import { fetchScenarios, fetchTotalDuration, selectScenario } from './scenarios.action';
import ScenarioData from './../models/ScenarioData';

const scenarioOne = new ScenarioData('Scenario 1', 1, 'Scenario Path 1', []);
const scenarioTwo = new ScenarioData('Scenario 2', 2, 'Scenario Path 2', []);
const scenarios = [scenarioOne, scenarioTwo];

describe('Scenarios Actions Test', () => {
	describe('fetchScenarios action', () => {
		it('should return the FETCH_SCENARIOS action', () => {
			expect(fetchScenarios(scenarios)).toEqual({
				type: 'FETCH_SCENARIOS',
				scenarios: scenarios
			});
		});
	});

	describe('fetchTotalDuration action', () => {
		it('should return the FETCH_TOTAL_DURATION action', () => {
			expect(fetchTotalDuration(10)).toEqual({
				type: 'FETCH_TOTAL_DURATION',
				duration: 10
			});
		});
	});

	describe('selectScenario action', () => {
		it('should return the SELECT_SCENARIO action', () => {
			expect(selectScenario(scenarioOne)).toEqual({
				type: 'SELECT_SCENARIO',
				selectedScenario: scenarioOne
			});
		});
	});
});
