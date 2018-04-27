import StepData, { IStepObject } from './StepData';
import Utils from './Utils';
const STATISTICS_DATA = require('./data/statistics.json');

class StatisticsResultsReader {
	public steps: StepData[];
	public totalExecutionTime: number;

	constructor() {
		this.steps = [];
		this.totalExecutionTime = 0;
	}

	public read(): void {
		this.totalExecutionTime = Utils.convertDurationFromMilliSecToSec(STATISTICS_DATA.duration);
		this.steps = STATISTICS_DATA.steps.map((step: IStepObject) => new StepData(step.name, step.duration));
	}

	public getSteps(): StepData[] {
		return this.steps;
	}
}

export default StatisticsResultsReader;
