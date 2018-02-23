import { combineReducers } from 'redux';
import authenticationReducer from './authentication';

const rootReducer = combineReducers({
  state: (state = {}) => state
});

export default rootReducer;
