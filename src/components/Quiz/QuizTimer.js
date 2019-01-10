import React, { Component } from 'react';

class QuizTimer extends Component {
  state = { count: 15 };
  timer = null;

  componentDidMount() {
    this.timer = setInterval(() => this.tickTimer(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tickTimer = () => {
    const { count } = this.state;
    const newCount = count > 0 ? count - 1 : 15;
    this.setState({ count: newCount });
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <div>Seconds Left:</div>
        <h3>{this.state.count}</h3>
      </div>
    );
  }
}

export default QuizTimer;
