import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startQuiz } from 'actions/quiz';
import QuitButton from './QuitButton';
import QuizTimer from './QuizTimer';
import QuizCard from './QuizCard';

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
    if (!this.props.quiz) return null;

    return (
      <div>
        <QuizTimer />
        <QuizCard />
        <QuitButton />
        <h5>Score: {this.props.quiz.score}</h5>
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
