import selectScenario from './select-scenario.reducer';
import ScenarioData from './../models/ScenarioData';

const NOT_EXISTENT_ACTION = {
	type: 'NOT_EXISTENT',
	selectedScenario: ['BLA']
};
const SCENARIO_TO_SELECT = new ScenarioData('Title 1', 1, 'Path 1', []);
const SELECT_SCENARIO_ACTION = {
	type: 'SELECT_SCENARIO',
	selectedScenario: SCENARIO_TO_SELECT
};

describe('selectScenario', () => {
	it('should be defined', () => {
		expect(selectScenario).toBeDefined();
		expect(typeof selectScenario).toEqual('function');
	});

	it('should return the initial state if the action not exist', () => {
		expect(selectScenario(null, NOT_EXISTENT_ACTION)).toEqual(null);
	});

	it('should return the selected scenario', () => {
		expect(selectScenario(null, SELECT_SCENARIO_ACTION)).toEqual(SCENARIO_TO_SELECT);
	});
});
