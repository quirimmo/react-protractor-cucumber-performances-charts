import steps from './steps.reducer';
import StepData from './../models/StepData';

const NOT_EXISTENT_ACTION = {
	type: 'NOT_EXISTENT',
	selectedScenario: ['BLA']
};
const STEP = new StepData('Title 1', 1);

describe('steps', () => {
	it('should be defined', () => {
		expect(steps).toBeDefined();
		expect(typeof steps).toEqual('function');
	});

	it('should return the initial state', () => {
		expect(steps([STEP], NOT_EXISTENT_ACTION)).toEqual([STEP]);
	});
});
