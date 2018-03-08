import { combineReducers } from 'redux';
import scenarios from './reducers/scenarios.reducer';
import totalDuration from './reducers/total-duration.reducer';
import selectScenario from './reducers/select-scenario.reducer';

const reducers = combineReducers({ scenarios, totalDuration, selectScenario });

export default reducers;
