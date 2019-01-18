import { ADD_SCORE } from 'actions/types';

export function addScore(name, score) {
  return {
    type: ADD_SCORE,
    payload: { name, score }
  };
}
