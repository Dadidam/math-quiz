import React from 'react';
import { Button, Icon } from 'antd';
import { Link } from 'react-router-dom';

const StartButton = () => {
  return (
    <Link to="/quiz">
      {/* <img
          src="button_500px.png"
          width="120"
          alt="Start Quiz"
          className="startButton"
        /> */}
      <Button type="primary" size="large">
        START
        <Icon type="rocket" />
      </Button>
    </Link>
  );
};

export default StartButton;
