jest.mock('./statistics.json', () => ({ duration: 10, steps: [{ name: 'Title', duration: 1 }] }), { virtual: true });
jest.mock('./Utils');

import StatisticsResultsReader from './StatisticsResultsReader';
import StepData from './StepData';

let statisticsResultsReader: StatisticsResultsReader;
const step = new StepData('Title', 1);

describe('StatisticsResultsReader', () => {
	beforeEach(() => {
		statisticsResultsReader = new StatisticsResultsReader();
	});

	describe('General', () => {
		it('should be defined', () => {
			expect(statisticsResultsReader).toBeDefined();
			expect(statisticsResultsReader instanceof StatisticsResultsReader).toBeTruthy();
		});

		it('should define the methods', () => {
			expect(typeof statisticsResultsReader.getSteps).toEqual('function');
			expect(typeof statisticsResultsReader.read).toEqual('function');
		});

		it('should init the attributes', () => {
			expect(statisticsResultsReader.steps).toEqual([]);
			expect(statisticsResultsReader.totalExecutionTime).toEqual(0);
		});
	});

	describe('getScenarios', () => {
		it('should return the list of scenarios', () => {
			statisticsResultsReader.steps.push(step);
			expect(statisticsResultsReader.getSteps()).toEqual([step]);
		});
	});

	describe('read', () => {
		beforeEach(() => {
			statisticsResultsReader.read();
		});

		it('should set the total execution time', () => {
			expect(statisticsResultsReader.totalExecutionTime).toEqual(10);
		});

		it('should set the scenarios', () => {
			expect(statisticsResultsReader.steps).toEqual([step]);
		});
	});
});
