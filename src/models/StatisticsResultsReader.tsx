import StepData, { IStepObject } from './StepData';
import Utils from './Utils';

const STATISTICS_DATA = require('./statistics.json');

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
		console.log(this.steps);
		// this.steps = STATISTICS_DATA.steps.map((this, step) => onEachStep.bind(this));

		// function onEachStep(this: StatisticsResultsReader, step: IStepObject) {
		// 	const stepData: StepData = new StepData(step.name, step.duration);
		// 	this.steps.push(stepData);
		// }

		// function onEachScenarioStep(this: PerformancesResultsReader, scenario: ScenarioData, step: IStepObject) {
		// 	const stepData: StepData = new StepData(step.name, step.duration);
		// 	scenario.steps.push(stepData);
		// }
	}

	public getSteps(): StepData[] {
		return this.steps;
	}

}

export default StatisticsResultsReader;
