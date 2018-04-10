class PerformancesResultsReader {
	constructor() {}

	read = jest.fn(() => {});
	getScenarios = jest.fn(() => ['Scenario 1', 'Scenario 2']);
	getTotalDuration = jest.fn(() => 10);
}

export default PerformancesResultsReader;
