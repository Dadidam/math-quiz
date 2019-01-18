import { INIT_TOP, ADD_SCORE, TOGGLE_TOP_MODE } from 'actions/types';

export function initTop() {
  return {
    type: INIT_TOP,
    payload: null
  };
}

export function addScore(name, score) {
  return {
    type: ADD_SCORE,
    payload: { name, score }
  };
}

export function toggleTopMode() {
  return {
    type: TOGGLE_TOP_MODE,
    payload: null
  };
}
