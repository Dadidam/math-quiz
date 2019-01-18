import { combineReducers } from 'redux';
import quiz from './quiz';
import timer from './timer';
import top from './top';

export default combineReducers({
  quiz,
  timer,
  top
});
