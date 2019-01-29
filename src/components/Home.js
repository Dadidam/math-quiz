import React from 'react';
import StartButton from './StartButton';
import Top from './Top';

const Home = () => {
  return (
    <div>
      <img src="steam-logo.png" alt="" id="steam-logo" />
      <h1>Math Quiz</h1>
      <StartButton />
      <Top />
    </div>
  );
};

export default Home;
