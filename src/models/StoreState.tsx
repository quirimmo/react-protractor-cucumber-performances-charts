import StepData from './StepData';
import ScenarioData from './ScenarioData';

export default interface StoreState {
	scenarios: ScenarioData[];
	steps: StepData[];
	totalDuration: number;
	selectedScenario: ScenarioData | null;
};
