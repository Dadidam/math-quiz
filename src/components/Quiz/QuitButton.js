import React from 'react';
import { Button, Icon } from 'antd';
import { connect } from 'react-redux';
import { quitQuiz } from 'actions/quiz';

const QuitButton = props => {
  const cb = props.action || props.quitQuiz;
  return (
    <div className="left-corner-float">
      <Button type="danger" onClick={cb} id="quit-button">
        <div className="quit-button__content">
          <Icon type="logout" /> Quit
        </div>
      </Button>
    </div>
  );
};

export default connect(
  null,
  { quitQuiz }
)(QuitButton);
