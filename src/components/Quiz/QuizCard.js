import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { connect } from 'react-redux';
import { startQuiz, nextQuestion, answerQuestion } from 'actions/quiz';
import { stopTimer } from 'actions/timer';
import { TIMER_MAX_VALUE } from 'helpers/config';

class QuizCard extends Component {
  state = { question: null };

  componentDidMount() {
    this.setState({ question: this.props.quiz.questions[0] });
  }

  componentWillReceiveProps(nextProps) {
    // show next question if time's up:
    if (
      this.props.timer &&
      nextProps.timer &&
      this.props.timer.counter === 0 &&
      nextProps.timer.counter === TIMER_MAX_VALUE
    ) {
      setTimeout(() => this.nextQuestion(), 100);
    }

    // stop timer ticking if quiz is done:
    if (
      this.props.quiz.finished === false &&
      nextProps.quiz.finished === true
    ) {
      this.props.stopTimer();
    }
  }

  getCardTitle() {
    const { stage, questions } = this.props.quiz;
    return `Question ${stage} of ${questions.length}`;
  }

  // TODO: fix it
  // getAnswersArray() {
  //   return _.map(this.props.quiz.questions, item => {
  //     return (
  //       <Button style={{ margin: '0 10px' }} value={item}>
  //         {item}
  //       </Button>
  //     );
  //   });
  // }

  nextQuestion = () => {
    // update stage value in redux store:
    this.props.answerQuestion();

    // update current question:
    this.updateQuizQuestion();
  };

  updateQuizQuestion = () => {
    setTimeout(() => {
      const { stage, questions } = this.props.quiz;
      this.setState({ question: questions[stage - 1] });
    }, 100);
  };

  onAnswer = event => {
    this.props.answerQuestion(event.target.value, this.props.timer.counter);
    this.updateQuizQuestion();
  };

  render() {
    if (this.props.quiz.stage === null || !this.state.question) return null;

    const { answers } = this.state.question;

    const actions = [
      <Button
        style={{ margin: '0 10px' }}
        value={answers[0]}
        onClick={this.onAnswer}
      >
        {answers[0]}
      </Button>,
      <Button
        style={{ margin: '0 10px' }}
        value={answers[1]}
        onClick={this.onAnswer}
      >
        {answers[1]}
      </Button>,
      <Button
        style={{ margin: '0 10px' }}
        value={answers[2]}
        onClick={this.onAnswer}
      >
        {answers[2]}
      </Button>,
      <Button
        style={{ margin: '0 10px' }}
        value={answers[3]}
        onClick={this.onAnswer}
      >
        {answers[3]}
      </Button>
    ];

    return (
      <Card
        type="inner"
        title={this.getCardTitle()}
        actions={actions}
        id="quiz-card"
      >
        <code id="question">{this.state.question.question}</code>
      </Card>
    );
  }
}

function mapStateToProps({ quiz, timer }) {
  return { quiz, timer };
}

export default connect(
  mapStateToProps,
  { startQuiz, nextQuestion, answerQuestion, stopTimer }
)(QuizCard);
