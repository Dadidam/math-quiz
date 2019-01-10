import { START_QUIZ, QUIT_QUIZ } from 'actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case START_QUIZ:
      return { score: 0, stage: 1, questions: [] };
    case QUIT_QUIZ:
      return null;
    default:
      return state;
  }
}
