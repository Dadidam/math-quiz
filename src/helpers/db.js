import _ from 'lodash';

const db = [
  {
    id: 1,
    question: '2 + 2 = ?',
    answers: [2, 3, 4, 5],
    answer: 4
  },
  {
    id: 2,
    question: '3 + 3 = ?',
    answers: [3, 4, 5, 6],
    answer: 6
  },
  {
    id: 3,
    question: '4 + 4 = ?',
    answers: [8, 9, 10, 11],
    answer: 8
  },
  {
    id: 4,
    question: '5 + 5 = ?',
    answers: [9, 10, 11, 12],
    answer: 10
  },
  {
    id: 5,
    question: '6 + 6 = ?',
    answers: [10, 11, 12, 15],
    answer: 12
  }
];

export const getRandomQuestions = (count = 5) => {
  return _.sampleSize(db, count);
};
