import {
  START_QUIZ,
  QUIT_QUIZ,
  NEXT_QUESTION,
  ANSWER_QUESTION
} from 'actions/types';
import { getRandomQuestions } from 'helpers/db';

export default function(state = null, action) {
  switch (action.type) {
    case START_QUIZ:
      return { score: 0, stage: 1, questions: getRandomQuestions() };
    case QUIT_QUIZ:
      return null;
    // case NEXT_QUESTION:
      // debugger;
      // const finished = state.stage === state.questions.length;
      // const newStage = finished ? null : state.stage + 1;
      // return { ...state, stage: newStage, finished };
    case ANSWER_QUESTION:
      const correctAnswer = state.questions[state.stage - 1].answer;
      const newScore =
        Number(action.payload) === correctAnswer
          ? state.score + 5
          : state.score;

      const finished = state.stage === state.questions.length;
      const newStage = finished ? null : state.stage + 1;

      return { ...state, score: newScore, stage: newStage };
    default:
      return state;
  }
}
