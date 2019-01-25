import React, { Component } from 'react';
import { Button, Icon, Input, Divider } from 'antd';
import { connect } from 'react-redux';
import { quitQuiz } from 'actions/quiz';
import { addScore } from 'actions/top';
import QuitButton from './QuitButton';

class Share extends Component {
  state = { player: '' };

  componentDidMount() {
    const { quiz } = this.props;

    if (!quiz) {
      this.redirect();
    }
  }

  onChangePlayerName = e => {
    this.setState({ player: e.target.value });
  };

  redirect = () => {
    // clean quiz data:
    this.props.quitQuiz();

    // redirect user:
    this.props.history.push('/');
  };

  saveResult = () => {
    // save results in localStorage:
    this.props.addScore(this.state.player, this.props.quiz.score);

    // see you later:
    this.redirect();
  };

  render() {
    if (!this.props.quiz) return null;

    const { player } = this.state;
    const disabled = String(player).length < 3;

    return (
      <div>
        <QuitButton action={this.redirect} />
        <h1>
          <Icon type="trophy" />
          &nbsp;{this.props.quiz.score}
        </h1>
        <h1>Enter your name:</h1>
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
