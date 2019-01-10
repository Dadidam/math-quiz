import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { connect } from 'react-redux';
import { startQuiz } from 'actions/quiz';
import QuitButton from './QuitButton';
import QuizTimer from './QuizTimer';

class QuizApp extends Component {
  componentDidMount() {
    this.props.startQuiz();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.quiz === null) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div>
        <QuizTimer />
        <Card
          type="inner"
          title="Question 3 of 5"
          actions={[
            <Button style={{ margin: '0 10px' }}>13123132</Button>,
            <Button style={{ margin: '0 10px' }}>13123132</Button>,
            <Button style={{ margin: '0 10px' }}>13123132</Button>,
            <Button style={{ margin: '0 10px' }}>13123132</Button>
          ]}
        >
          (2 + 2) x 5 - 3 = ?
        </Card>
        <QuitButton />
      </div>
    );
  }
}

function mapStateToProps({ quiz }) {
  return { quiz };
}

export default connect(
  mapStateToProps,
  { startQuiz }
)(QuizApp);
