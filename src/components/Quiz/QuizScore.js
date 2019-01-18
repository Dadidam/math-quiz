import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startQuiz } from 'actions/quiz';

class QuizScore extends Component {
  render() {
    const { quiz } = this.props;

    // no quiz - no score:
    if (!quiz) return null;

    // quiz finished - show final screen:
    if (quiz.finished)
      return (
        <div>
          <h1>Great Job!</h1>
          <h3>
            Your Total Score: <span className="score-result">{quiz.score}</span>
          </h3>
          Wanna save your result?
        </div>
      );

    // quiz in action - show current progress:
    return <h5>Score: {quiz.score}</h5>;
  }
}

function mapStateToProps({ quiz }) {
  return { quiz };
}

export default connect(
  mapStateToProps,
  { startQuiz }
)(QuizScore);
