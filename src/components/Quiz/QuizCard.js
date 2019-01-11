import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { connect } from 'react-redux';
import { startQuiz, nextQuestion, answerQuestion } from 'actions/quiz';

class QuizCard extends Component {
  state = { question: null, stage: null, timeLeft: null };
  timer = null;

  componentDidMount() {
    this.nextQuestion();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
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

  setTimer = () => {
    if (this.timer) clearInterval(this.timer);
    this.timer = setInterval(() => this.nextQuestion(), 16000);
  };

  nextQuestion = () => {
    const { stage, questions } = this.props.quiz;

    if (stage > 1) {
      // reset timer
      this.setTimer();
    }

    // update state values
    const stageIndex = stage > 1 ? stage - 1 : 0;
    this.setState({ question: questions[stageIndex] });
  };

  onAnswer = event => {
    this.props.answerQuestion(event.target.value);
    setTimeout(() => this.nextQuestion(), 100);
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
      <Card type="inner" title={this.getCardTitle()} actions={actions}>
        {this.state.question.question}
      </Card>
    );
  }
}

function mapStateToProps({ quiz }) {
  return { quiz };
}

export default connect(
  mapStateToProps,
  { startQuiz, nextQuestion, answerQuestion }
)(QuizCard);
