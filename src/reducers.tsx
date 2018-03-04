import { combineReducers } from 'redux';
import scenarios from './reducers/scenarios.reducer';
import totalDuration from './reducers/total-duration.reducer';

const reducers = combineReducers({ scenarios, totalDuration });

export default reducers;
