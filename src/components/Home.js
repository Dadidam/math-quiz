import React from 'react';
import { Icon, Divider } from 'antd';
import StartButton from './StartButton';

const Home = () => {
  return (
    <div>
      <h1>Math Quiz</h1>
      <StartButton />
      <Divider />
      <a href="/">
        <Icon type="trophy" />
        &nbsp;Best Quiz Players
      </a>
    </div>
  );
};

export default Home;
