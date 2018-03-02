import Utils from './Utils';

class StepData {
	public name: string;
	public duration: number;

	constructor(name: string, duration: number) {
		this.name = name;
		this.duration = Utils.convertDurationFromMilliSecToSec(duration);
	}
}

export default StepData;

export interface IStepObject {
	name: string;
	duration: number;
}
