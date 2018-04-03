class StatisticsResultsReader {
	constructor() {}
	read = jest.fn(() => {});
	getSteps = jest.fn(() => ['Step 1', 'Step 2']);
}

export default StatisticsResultsReader;
