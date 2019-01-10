import { combineReducers } from 'redux';
import user from './user';
import quiz from './quiz';

export default combineReducers({
  user,
  quiz
});
