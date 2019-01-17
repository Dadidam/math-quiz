import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activateTimer, updateTimer, stopTimer } from 'actions/timer';
import { TIMER_MAX_VALUE, TIMER_TICK_STEP } from 'helpers/config';

class QuizTimer extends Component {
  timer = null;

  componentDidMount() {
    // set timer to default value:
    this.props.activateTimer();

    // update timer value every second:
    this.timer = setInterval(() => this.tickTimer(), TIMER_TICK_STEP);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.timer && nextProps.timer === null) {
      clearInterval(this.timer);
    }
  }

  tickTimer = () => {
    const { counter } = this.props.timer;
    const updatedCounter = counter > 0 ? counter - 1 : TIMER_MAX_VALUE;
    this.props.updateTimer(updatedCounter);
  };

  render() {
    const { timer } = this.props;
    if (!timer) return null;

    return (
      <div style={{ textAlign: 'center' }}>
        <div>Seconds Left:</div>
        <h3>{timer.counter}</h3>
      </div>
    );
  }
}

function mapStateToProps({ timer }) {
  return { timer };
}

export default connect(
  mapStateToProps,
  { activateTimer, updateTimer, stopTimer }
)(QuizTimer);
