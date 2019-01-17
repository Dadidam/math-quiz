import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { connect } from 'react-redux';
import { startQuiz, nextQuestion, answerQuestion } from 'actions/quiz';

class QuizCard extends Component {
  state = { question: null };

  componentDidMount() {
    this.setState({ question: this.props.quiz.questions[0] });
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.timer &&
      nextProps.timer &&
      this.props.timer.counter === 0 &&
      nextProps.timer.counter === 15
    ) {
      setTimeout(() => this.nextQuestion(), 100);
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
      <Card type="inner" title={this.getCardTitle()} actions={actions}>
        {this.state.question.question}
      </Card>
    );
  }
}

function mapStateToProps({ quiz, timer }) {
  return { quiz, timer };
}

export default connect(
  mapStateToProps,
  { startQuiz, nextQuestion, answerQuestion }
)(QuizCard);
