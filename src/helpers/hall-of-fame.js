import _ from 'lodash';

export const bestPlayersStarter = [
  {
    name: 'Sofia',
    score: 50
  },
  {
    name: 'D@ddY',
    score: 35
  },
  {
    name: 'Clyde (the turtle)',
    score: 15
  }
];

export const sortTopList = topList => {
  return _.reverse(_.sortBy(topList, ['name', 'score']));
};

export const topColumns = [
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Score',
    dataIndex: 'score'
  }
];
