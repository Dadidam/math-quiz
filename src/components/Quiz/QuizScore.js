import React, { Component } from 'react';
import { Button, Icon, Divider } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startQuiz } from 'actions/quiz';

class QuizScore extends Component {
  renderGreetings = () => {
    const { score } = this.props.quiz;

    if (score <= 10) return 'Not Bad!';
    if (score < 30) return 'Nice Try!';
    if (score < 60) return 'Good Job!';
    if (score < 100) return 'Brilliant!';

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
          <Divider />
          <Link to="/quiz/share">
            <Button type="primary" id="share-button">
              Share my Score <Icon type="arrow-right" />
            </Button>
          </Link>
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
