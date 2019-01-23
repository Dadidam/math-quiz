import _ from 'lodash';

const db = [
  {
    id: 1,
    question: '20 x 4 + 16 : 4 = ?',
    answers: [100, 84, 44, 76],
    answer: 84
  },
  {
    id: 2,
    question: '(28 - 7) x 3 = ?',
    answers: [63, 7, 10, 64],
    answer: 63
  },
  {
    id: 3,
    question: '7 x 6 + 13 x 6 = ?',
    answers: [55, 100, 120, 330],
    answer: 120
  },
  {
    id: 4,
    question: '49 : (77 : 11) + 18 = ?',
    answers: [11, 25, 29, 34],
    answer: 25
  },
  {
    id: 5,
    question: '90 x 3 - 36 x 2 = ?',
    answers: [78, 121, 150, 198],
    answer: 198
  },
  {
    id: 6,
    question: '29 x 3 = ?',
    answers: [67, 76, 78, 87],
    answer: 87
  },
  {
    id: 7,
    question: '54 : 6 + 72 : 8 = ?',
    answers: [15, 16, 17, 18],
    answer: 18
  },
  {
    id: 8,
    question: '99 : 33 = ?',
    answers: [11, 1, 3, 33],
    answer: 3
  },
  {
    id: 9,
    question: '9 x 4 - 3 x 9 = ?',
    answers: [9, 11, 18, 27],
    answer: 9
  },
  {
    id: 10,
    question: '51 : 3 = ?',
    answers: [14, 17, 21, 23],
    answer: 17
  },
  {
    id: 11,
    question: '17 x 7 = ?',
    answers: [111, 98, 119, 109],
    answer: 119
  },
  {
    id: 12,
    question: '12 x 12 = ?',
    answers: [104, 121, 133, 144],
    answer: 144
  },
  {
    id: 13,
    question: '6 x 11 : 33 x 1 = ?',
    answers: [1, 2, 11, 22],
    answer: 2
  },
  {
    id: 14,
    question: '(30 + 6) x 1 : 4 = ?',
    answers: [7, 9, 15, 45],
    answer: 9
  },
  {
    id: 15,
    question: '14 x 6 = ?',
    answers: [20, 64, 75, 84],
    answer: 84
  },
  {
    id: 16,
    question: '35 : 5 + 17 x 2 = ?',
    answers: [4, 14, 41, 44],
    answer: 41
  },
  {
    id: 17,
    question: '50 - 16 x 3 + 6 = ?',
    answers: [7, 8, 9, 10],
    answer: 8
  },
  {
    id: 18,
    question: '32 : 4 x 5 = ?',
    answers: [20, 35, 40, 55],
    answer: 40
  },
  {
    id: 19,
    question: '6 x 3 : 2 = ?',
    answers: [9, 10, 11, 12],
    answer: 9
  },
  {
    id: 20,
    question: '16 : 4 + 4 x 8 = ?',
    answers: [0, 16, 32, 36],
    answer: 36
  },
  {
    id: 21,
    question: '46 - (13 + 8) : 3 = ?',
    answers: [29, 30, 32, 39],
    answer: 39
  },
  {
    id: 22,
    question: '35 : (4 + 3) = ?',
    answers: [5, 7, 15, 17],
    answer: 5
  },
  {
    id: 23,
    question: '9 x 4 - 9 : 3 = ?',
    answers: [0, 1, 9, 18],
    answer: 9
  },
  {
    id: 24,
    question: '57 - 4 x 6 = ?',
    answers: [33, 54, 174, 318],
    answer: 33
  },
  {
    id: 25,
    question: '(80 - 20) : 3  = ?',
    answers: [2, 10, 20, 120],
    answer: 20
  },
  {
    id: 26,
    question: '70 + 2 x 8 = ?',
    answers: [9, 86, 200, 576],
    answer: 86
  },
  {
    id: 27,
    question: '40 + 5 x (14 - 4) = ?',
    answers: [45, 50, 90, 100],
    answer: 90
  },
  {
    id: 28,
    question: '16 x 2 - 2 x 3 = ?',
    answers: [24, 26, 36, 90],
    answer: 26
  },
  {
    id: 29,
    question: '48 - 10 + 6 = ?',
    answers: [38, 40, 42, 44],
    answer: 44
  },
  {
    id: 30,
    question: '90 : 9 x 5 : 2 = ?',
    answers: [10, 25, 50, 100],
    answer: 25
  },
  {
    id: 31,
    question: '90 : (9 x 5) : 2 = ?',
    answers: [1, 2, 10, 25],
    answer: 1
  },
  {
    id: 32,
    question: '24 : 6 + 3 x 7 = ?',
    answers: [12, 21, 25, 49],
    answer: 25
  },
  {
    id: 33,
    question: '96 - 32 + 4 - 10 = ?',
    answers: [58, 68, 78, 88],
    answer: 58
  },
  {
    id: 34,
    question: '20 : (12 - 8) + 52 = ?',
    answers: [3, 43, 57, 82],
    answer: 57
  },
  {
    id: 35,
    question: '4 x 6 - (16 + 4) = ?',
    answers: [24, 2, 4, 15],
    answer: 4
  },
  {
    id: 36,
    question: '86 - 4 x 5 - 24 = ?',
    answers: [62, 20, 42, 34],
    answer: 42
  },
  {
    id: 37,
    question: '52 + 8 - 36 : 6 = ?',
    answers: [12, 24, 36, 54],
    answer: 54
  },
  {
    id: 38,
    question: '27 : 9 + 28 : 4 = ?',
    answers: [1, 8, 10, 18],
    answer: 10
  },
  {
    id: 39,
    question: '(22 + 18) : 4 = ?',
    answers: [40, 20, 10, 1],
    answer: 10
  },
  {
    id: 40,
    question: '(50 - 14) : 6 = ?',
    answers: [2, 4, 6, 8],
    answer: 6
  },
  {
    id: 41,
    question: '14 : 2 + 7 x 3 = ?',
    answers: [42, 32, 28, 14],
    answer: 28
  },
  {
    id: 42,
    question: '8 x 5 - 24 : 3 = ?',
    answers: [8, 16, 24, 32],
    answer: 32
  },
  {
    id: 43,
    question: '28 : 4 - 35 : 5 = ?',
    answers: [1, 9, 0, 10],
    answer: 0
  },
  {
    id: 44,
    question: '42 - 20 : 5 = ?',
    answers: [5, 17, 26, 38],
    answer: 38
  },
  {
    id: 45,
    question: '59 + 25 : 5 = ?',
    answers: [17, 62, 63, 64],
    answer: 64
  },
  {
    id: 46,
    question: '14 : 2 + 58 = ?',
    answers: [60, 68, 65, 54],
    answer: 65
  },
  {
    id: 47,
    question: '42 - 7 x 6 = ?',
    answers: [0, 1, 2, 12],
    answer: 0
  },
  {
    id: 48,
    question: '70 - 8 x 3 = ?',
    answers: [46, 50, 56, 64],
    answer: 46
  },
  {
    id: 49,
    question: '6 x 3 + 6 x 4 = ?',
    answers: [48, 128, 42, 216],
    answer: 42
  },
  {
    id: 50,
    question: '54 : (16 - 7) = ?',
    answers: [4, 6, 9, 11],
    answer: 6
  },
  {
    id: 51,
    question: '60 - 5 x 8 = ?',
    answers: [1, 2, 10, 20],
    answer: 20
  }
];

export const getRandomQuestions = (count = 5) => {
  return _.sampleSize(db, count);
};
