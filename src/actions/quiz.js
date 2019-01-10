import { START_QUIZ, QUIT_QUIZ } from 'actions/types';

export function startQuiz() {
  return {
    type: START_QUIZ,
    payload: null
  };
}

export function quitQuiz() {
  return {
    type: QUIT_QUIZ,
    payload: null
  };
}
