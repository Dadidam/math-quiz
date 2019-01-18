import React from 'react';
import { Icon, Divider } from 'antd';
import StartButton from './StartButton';

const Home = () => {
  return (
    <div>
      <h1>Math Quiz</h1>
      {/* <div style={{ boxShadow: '0px 0px 80px 10px rgba(153,153,153,1)', marginBottom: 25 }}>
        <img src="logo_png.png" alt="Math Quiz" style={{ width: 450 }} />
      </div> */}
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
