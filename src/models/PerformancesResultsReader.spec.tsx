jest.mock(
	'./data.json',
	() => ({
		totalTime: 100,
		scenarios: [
			{
				name: 'Scenario 1',
				duration: 10,
				filePath: 'Path 1',
				steps: [
					{
						name: 'Step 1',
						duration: 1
					}
				]
			}
		]
	}),
	{ virtual: true }
);

jest.mock('./Utils');

import PerformancesResultsReader from './PerformancesResultsReader';
import ScenarioData from './ScenarioData';
import StepData from './StepData';

let performancesResultsReader: PerformancesResultsReader;
const stepExample = new StepData('Step 1', 1);
const scenarioExample = new ScenarioData('Scenario 1', 10, 'Path 1', [stepExample]);

describe('PerformancesResultsReader', () => {
	beforeEach(() => {
		performancesResultsReader = new PerformancesResultsReader();
	});

	describe('General', () => {
		it('should be defined', () => {
			expect(performancesResultsReader).toBeDefined();
			expect(performancesResultsReader instanceof PerformancesResultsReader).toBeTruthy();
		});

		it('should define the methods', () => {
			expect(typeof performancesResultsReader.getScenarios).toEqual('function');
			expect(typeof performancesResultsReader.getTotalDuration).toEqual('function');
			expect(typeof performancesResultsReader.read).toEqual('function');
		});

		it('should init the attributes', () => {
			expect(performancesResultsReader.scenarios).toEqual([]);
			expect(performancesResultsReader.steps).toEqual([]);
			expect(performancesResultsReader.totalExecutionTime).toEqual(0);
		});
	});

	describe('getScenarios', () => {
		it('should return the list of scenarios', () => {
			performancesResultsReader.scenarios.push(scenarioExample);
			expect(performancesResultsReader.getScenarios()).toEqual([scenarioExample]);
		});
	});

	describe('getTotalDuration', () => {
		it('should return the total execution time', () => {
			performancesResultsReader.totalExecutionTime = 100;
			expect(performancesResultsReader.getTotalDuration()).toEqual(100);
		});
	});

	describe('read', () => {
		beforeEach(() => {
			performancesResultsReader.read();
		});

		it('should set the total execution time', () => {
			expect(performancesResultsReader.totalExecutionTime).toEqual(100);
		});

		it('should set the scenarios', () => {
			expect(performancesResultsReader.scenarios).toEqual([scenarioExample]);
		});
	});
});
