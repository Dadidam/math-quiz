import React, { Component } from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';
import { startQuiz } from 'actions/quiz';
import ScoreAction from './QuizScoreAction';

class QuizScore extends Component {
  renderGreetings = () => {
    const { score } = this.props.quiz;

    if (score <= 10) return 'Not Bad!';
    if (score < 100) return 'Nice Try!';
    if (score < 200) return 'Great Job!';
    if (score < 300) return 'Brilliant!';

    return 'You are AWESOME!';
  };

  render() {
    const { quiz } = this.props;

    // no quiz - no score:
    if (!quiz) return null;

    // quiz finished - show final screen:
    if (quiz.finished)
      return (
        <div>
          <h1>{this.renderGreetings()}</h1>
          <h2>
            Your Total Score:{' '}
            <span className="score-result">
              <Icon type="trophy" />
              &nbsp;{quiz.score}
            </span>
          </h2>
          <ScoreAction />
        </div>
      );

    // quiz in action - show current progress:
    return (
      <h3>
        <Icon type="trophy" />
        &nbsp;Score: {quiz.score}
      </h3>
    );
  }
}

function mapStateToProps({ quiz }) {
  return { quiz };
}

export default connect(
  mapStateToProps,
  { startQuiz }
)(QuizScore);
