import StepData from './StepData';
import Utils from './Utils';

class ScenarioData {
	public name: string;
	public duration: number;
	public filePath: string;
	public steps: StepData[];

	constructor(name: string, duration: number, filePath: string, steps: StepData[] = []) {
		this.name = name;
		this.duration = Utils.convertDurationFromMilliSecToSec(duration);
		this.filePath = filePath;
		this.steps = steps;
	}
}

export default ScenarioData;

export interface IScenarioObject {
	name: string;
	duration: number;
	filePath: string;
	steps: object[];
}
