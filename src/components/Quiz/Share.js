import React, { Component } from 'react';
import { Button, Icon, Input, Divider } from 'antd';
import { connect } from 'react-redux';
import { quitQuiz } from 'actions/quiz';
import { addScore } from 'actions/top';

class Share extends Component {
  state = { player: '' };

  onChangePlayerName = e => {
    this.setState({ player: e.target.value });
  };

  redirect = () => {
    this.props.quitQuiz();
    this.props.history.push('/');
  };

  saveResult = () => {
    // save results in localStorage:
    this.props.addScore(this.state.player, this.props.quiz.score);

    // clean quiz data:
    this.props.quitQuiz();

    // redirect user:
    this.props.history.push('/');
  };

  render() {
    const { player } = this.state;
    const title = player
      ? `Your score, ${player}: ${this.props.quiz.score}. YAY!`
      : 'Share your Score!';
    const disabled = String(player).length < 3;

    return (
      <div>
        <h1>{title}</h1>
        <Input
          placeholder="Enter your name"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          size="large"
          value={this.state.player}
          onChange={this.onChangePlayerName}
        />
        <Divider />
        <Button
          type="danger"
          size="large"
          icon="smile"
          disabled={disabled}
          onClick={this.saveResult}
        >
          Share
        </Button>
      </div>
    );
  }
}

function mapStateToProps({ quiz }) {
  return { quiz };
}

export default connect(
  mapStateToProps,
  { quitQuiz, addScore }
)(Share);
