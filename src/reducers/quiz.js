import {
  START_QUIZ,
  QUIT_QUIZ,
  NEXT_QUESTION,
  ANSWER_QUESTION
} from 'actions/types';
import { getRandomQuestions } from 'helpers/db';
import { CORRECT_ANSWER_POINTS } from 'helpers/config';

export default function(state = null, action) {
  switch (action.type) {
    case START_QUIZ:
      return { score: 0, stage: 1, questions: getRandomQuestions() };
    case QUIT_QUIZ:
      return null;
    case NEXT_QUESTION:
      return state;
    // debugger;
    // const finished = state.stage === state.questions.length;
    // const newStage = finished ? null : state.stage + 1;
    // return { ...state, stage: newStage, finished };
    case ANSWER_QUESTION:
      const { answer, timer } = action.payload;
      const correctAnswer = state.questions[state.stage - 1].answer;
      const newScore =
        Number(answer) === correctAnswer
          ? state.score + CORRECT_ANSWER_POINTS
          : state.score;
      const bonusPoints = newScore > state.score ? timer : 0;

      const finished = state.stage === state.questions.length;
      const newStage = finished ? null : state.stage + 1;

      return {
        ...state,
        score: newScore + bonusPoints,
        stage: newStage,
        finished
      };
    default:
      return state;
  }
}
