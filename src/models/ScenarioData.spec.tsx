jest.mock('./Utils');
import ScenarioData from './ScenarioData';
import StepData from './StepData';

let scenarioData: ScenarioData;
const step = new StepData('Title', 1);

describe('ScenarioData', () => {
	beforeEach(() => {
		scenarioData = new ScenarioData('Title', 1, 'Path', [step]);
	});

	describe('General', () => {
		it('should be defined', () => {
			expect(scenarioData).toBeDefined();
			expect(scenarioData instanceof ScenarioData).toBeTruthy();
		});

		it('should init the attributes', () => {
			expect(scenarioData.name).toEqual('Title');
			expect(scenarioData.duration).toEqual(1);
			expect(scenarioData.filePath).toEqual('Path');
			expect(scenarioData.steps).toEqual([step]);
		});
	});
});
