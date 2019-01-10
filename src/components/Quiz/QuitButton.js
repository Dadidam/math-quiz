import React from 'react';
import { Button, Icon } from 'antd';
import { connect } from 'react-redux';
import { quitQuiz } from 'actions/quiz';
import './style.css';

const QuitButton = props => {
  return (
    <div className="left-corner-float">
      <Button ghost type="danger" onClick={props.quitQuiz}>
        <Icon type="logout" /> Quit
      </Button>
    </div>
  );
};

export default connect(
  null,
  { quitQuiz }
)(QuitButton);
