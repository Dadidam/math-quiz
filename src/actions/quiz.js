import {
  START_QUIZ,
  QUIT_QUIZ,
  NEXT_QUESTION,
  ANSWER_QUESTION
} from 'actions/types';

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

export function nextQuestion() {
  return {
    type: NEXT_QUESTION,
    payload: null
  };
}

export function answerQuestion(answer) {
  return {
    type: ANSWER_QUESTION,
    payload: answer
  };
}
