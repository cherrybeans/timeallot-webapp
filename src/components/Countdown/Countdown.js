import React, { Component } from "react";
import "./Countdown.css";
class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = { time: { m: 25, s: 0 }, secondsLeft: 25 * 60 };
    this.ongoing = true;
    this.completed = false;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.formatTime = this.formatTime.bind(this);
  }

  startTimer() {
    this.ongoing = true;
    this.duration = 25;
    this.setState({
      time: { m: this.duration, s: 0 },
      secondsLeft: this.duration * 60
    });
  }

  countDown() {
    this.setState({ secondsLeft: this.state.secondsLeft - 1 });

    if (this.state.secondsLeft === 0) {
      this.ongoing = false;
      this.completed = true;
      clearInterval(this.timerID);
    }

    let minutes = Math.floor(this.state.secondsLeft / 60);
    let seconds = Math.ceil(this.state.secondsLeft % 60);
    this.setState({ m: minutes, s: seconds });
  }

  formatTime() {
    let minutes = this.state.m;
    let seconds = this.state.s;

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    return minutes + ":" + seconds;
  }

  componentDidMount() {
    if (this.ongoing) {
      this.timerID = setInterval(() => this.countDown(), 1000);
    }
  }

  render() {
    return (
      <div>
        <span className="countdown">
          {this.formatTime()}
          <br />
          <button onClick={this.startTimer}>Start</button>
        </span>
      </div>
    );
  }
}

export default Countdown;
