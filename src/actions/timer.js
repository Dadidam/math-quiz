import { ACTIVATE_TIMER, UPDATE_TIMER, STOP_TIMER } from 'actions/types';

export function activateTimer() {
  return {
    type: ACTIVATE_TIMER,
    payload: null
  };
}

export function updateTimer(value) {
  return {
    type: UPDATE_TIMER,
    payload: value
  };
}

export function stopTimer() {
  return {
    type: STOP_TIMER,
    payload: null
  };
}
