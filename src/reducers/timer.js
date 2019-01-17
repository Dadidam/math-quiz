import {
  ACTIVATE_TIMER,
  UPDATE_TIMER,
  STOP_TIMER,
  ANSWER_QUESTION
} from 'actions/types';
import { TIMER_MAX_VALUE } from 'helpers/config';

export default function(state = null, action) {
  switch (action.type) {
    case ACTIVATE_TIMER:
    case ANSWER_QUESTION:
      return { counter: TIMER_MAX_VALUE };
    case UPDATE_TIMER:
      return { counter: action.payload };
    case STOP_TIMER:
      return null;
    default:
      return state;
  }
}
