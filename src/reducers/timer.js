import { ACTIVATE_TIMER, UPDATE_TIMER, STOP_TIMER } from 'actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case ACTIVATE_TIMER:
      return { counter: 15 };
    case UPDATE_TIMER:
      return { counter: action.payload };
    case STOP_TIMER:
      return null;
    default:
      return state;
  }
}
