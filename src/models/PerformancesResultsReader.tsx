import ScenarioData, { IScenarioObject } from './ScenarioData';
import StepData, { IStepObject } from './StepData';
import Utils from './Utils';
const PERFORMANCES_DATA = require('./data.json');
import axios from 'axios';

class PerformancesResultsReader {
	public scenarios: ScenarioData[];
	public steps: StepData[];
	public totalExecutionTime: number;

	constructor() {
		this.scenarios = [];
		this.steps = [];
		this.totalExecutionTime = 0;
	}

	public read(): void {
		axios.get('http://localhost:8080//cucumber-performances-charts/data/data.json').then(
			resp => {
				console.log(resp);
			},
			err => {
				console.log(err);
			}
		);

		// fetch('/data/data.json').then(
		// 	resp => {
		// 		console.dir(resp);
		// 	},
		// 	err => {
		// 		console.log(err);
		// 	}
		// );

		// fetch('/data/data.json')
		// 	.then(r => r.json())
		// 	.then(json => {
		// 		console.log(json);
		// 	});

		this.totalExecutionTime = Utils.convertDurationFromMilliSecToSec(PERFORMANCES_DATA.totalTime);
		PERFORMANCES_DATA.scenarios.forEach(onEachScenario.bind(this));

		function onEachScenario(this: PerformancesResultsReader, scenario: IScenarioObject) {
			const scenarioData: ScenarioData = new ScenarioData(scenario.name, scenario.duration, scenario.filePath);
			scenario.steps.forEach(onEachScenarioStep.bind(this, scenarioData));
			this.scenarios.push(scenarioData);
		}

		function onEachScenarioStep(this: PerformancesResultsReader, scenario: ScenarioData, step: IStepObject) {
			const stepData: StepData = new StepData(step.name, step.duration);
			scenario.steps.push(stepData);
		}
	}

	public getScenarios(): ScenarioData[] {
		return this.scenarios;
	}

	public getTotalDuration(): number {
		return this.totalExecutionTime;
	}
}

export default PerformancesResultsReader;
