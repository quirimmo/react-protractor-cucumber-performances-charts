import scenarios from './scenarios.reducer';
import ScenarioData from './../models/ScenarioData';

const NOT_EXISTENT_ACTION = {
	type: 'NOT_EXISTENT',
	scenarios: ['BLA']
};
const EXISTENT_SCENARIO = new ScenarioData('Title 1', 1, 'Path 1', []);
const NEW_SCENARIO = new ScenarioData('Title 2', 2, 'Path 2', []);
const FETCH_SCENARIOS_ACTION = {
	type: 'FETCH_SCENARIOS',
	scenarios: [NEW_SCENARIO]
};

describe('scenarios', () => {
	it('should be defined', () => {
		expect(scenarios).toBeDefined();
		expect(typeof scenarios).toEqual('function');
	});

	it('should return the initial state if the action not exist', () => {
		expect(scenarios([], NOT_EXISTENT_ACTION)).toEqual([]);
	});

	it('should concatenate the scenarios into the state', () => {
		expect(scenarios([EXISTENT_SCENARIO], FETCH_SCENARIOS_ACTION)).toEqual([EXISTENT_SCENARIO, NEW_SCENARIO]);
	});
});
