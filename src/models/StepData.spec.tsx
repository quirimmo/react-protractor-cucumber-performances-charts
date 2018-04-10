jest.mock('./Utils');
import StepData from './StepData';

let stepData: StepData;

describe('StepData', () => {
	beforeEach(() => {
		stepData = new StepData('Title', 1);
	});

	describe('General', () => {
		it('should be defined', () => {
			expect(stepData).toBeDefined();
			expect(stepData instanceof StepData).toBeTruthy();
		});

		it('should init the attributes', () => {
			expect(stepData.name).toEqual('Title');
			expect(stepData.duration).toEqual(1);
		});
	});
});
