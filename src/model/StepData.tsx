class StepData {
	public name: string;
	public duration: number;

	constructor(name: string, duration: number) {
		this.name = name;
		this.duration = duration;
	}
}

export default StepData;

export interface IStepObject {
	name: string;
	duration: number;
}
