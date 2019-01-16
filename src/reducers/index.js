import { combineReducers } from 'redux';
import quiz from './quiz';
import timer from './timer';

export default combineReducers({
  quiz,
  timer
});
