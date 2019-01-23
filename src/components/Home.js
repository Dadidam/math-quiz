import React from 'react';
import { Divider } from 'antd';
import StartButton from './StartButton';
import Top from './Top';

const Home = () => {
  return (
    <div>
      <h1>Math Quiz</h1>
      <StartButton />
      <Divider />
      <Top />
    </div>
  );
};

export default Home;
