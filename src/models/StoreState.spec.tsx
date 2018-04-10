import StoreState from './StoreState';
import ScenarioData from './ScenarioData';
import StepData from './StepData';

const step: StepData = new StepData('Step', 1);
const scenario: ScenarioData = new ScenarioData('Scenario', 1, 'Path', [step]);

const storeState: StoreState = {
	scenarios: [scenario],
	steps: [step],
	totalDuration: 10,
	selectedScenario: null
};

describe('StoreState', () => {
	it('should be defined', () => {
		expect(storeState).toBeDefined();
	});

	it('should set the properties', () => {
		expect(storeState.scenarios).toEqual([scenario]);
		expect(storeState.steps).toEqual([step]);
		expect(storeState.totalDuration).toEqual(10);
		expect(storeState.selectedScenario).toBeNull();
	});
});
