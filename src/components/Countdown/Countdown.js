import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import "./Countdown.css";

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: { m: 25, s: 0 },
      secondsLeft: 25 * 60,
      isTimerOngoing: false
    };
    this.completed = false;

    this.countDown = this.countDown.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.cancelTimer = this.cancelTimer.bind(this);
    this.tick = this.tick.bind(this);
    this.formatTime = this.formatTime.bind(this);
    this.renderPlayCancelButton = this.renderPlayCancelButton.bind(this);
  }

  startTimer() {
    this.duration = 25;
    this.completed = false;
    this.setState({
      time: { m: this.duration, s: 0 },
      secondsLeft: this.duration * 60,
      isTimerOngoing: true
    });

    this.countDown();
  }

  cancelTimer() {
    this.setState({
      time: { m: this.duration, s: 0 },
      secondsLeft: this.duration * 60,
      isTimerOngoing: false
    });
    clearInterval(this.timerID);
    this.timerID = false;
  }

  countDown() {
    if (!this.timerID) {
      this.timerID = setInterval(() => this.tick(), 1000);
    }
  }

  tick() {
    this.setState({ secondsLeft: this.state.secondsLeft - 1 });

    if (this.state.secondsLeft === 0) {
      this.setState({ isTimerOngoing: false });
      this.completed = true;
      clearInterval(this.timerID);
      this.timerID = false;
    }

    let minutes = Math.floor(this.state.secondsLeft / 60);
    let seconds = Math.ceil(this.state.secondsLeft % 60);
    this.setState({ time: { m: minutes, s: seconds } });
  }

  formatTime() {
    let minutes = this.state.time.m;
    let seconds = this.state.time.s;

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    return minutes + ":" + seconds;
  }

  renderPlayCancelButton() {
    return this.state.isTimerOngoing ? (
      <CancelButton onClickFunc={this.cancelTimer} />
    ) : (
      <PlayButton onClickFunc={this.startTimer} />
    );
  }

  render() {
    return (
      <div>
        <span className="countdown">
          {this.formatTime()}
          <br />
          {this.renderPlayCancelButton()}
        </span>
      </div>
    );
  }
}

function PlayButton(props) {
  return (
    <a onClick={props.onClickFunc}>
      <FontAwesome name="play-circle" />
    </a>
  );
}

function CancelButton(props) {
  return (
    <a onClick={props.onClickFunc}>
      <FontAwesome name="times-circle" />
    </a>
  );
}

export default Countdown;
