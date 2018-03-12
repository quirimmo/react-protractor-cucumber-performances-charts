import { combineReducers } from 'redux';
import scenarios from './reducers/scenarios.reducer';
import steps from './reducers/steps.reducer';
import totalDuration from './reducers/total-duration.reducer';
import selectedScenario from './reducers/select-scenario.reducer';

const reducers = combineReducers({ scenarios, totalDuration, selectedScenario, steps });

export default reducers;
