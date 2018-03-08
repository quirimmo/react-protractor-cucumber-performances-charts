import { combineReducers } from 'redux';
import scenarios from './reducers/scenarios.reducer';
import totalDuration from './reducers/total-duration.reducer';
import selectedScenario from './reducers/select-scenario.reducer';

const reducers = combineReducers({ scenarios, totalDuration, selectedScenario });

export default reducers;
