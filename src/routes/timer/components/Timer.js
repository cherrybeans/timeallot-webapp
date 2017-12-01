// @flow
import React, { Component } from "react";
import Countdown from "../../../components/Countdown/Countdown";
import TagContainer from "../../../components/TagContainer/TagContainer";

import "./Timer.css";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: { project: 5, duration: 24, subtags: [6, 7] }
    };
  }

  render() {
    return (
      <div>
        <h1>Timer</h1>
        <p>
          This is a Pomodoro timer. Start doing some focused work! Once you
          start a timer, you cannot do anything else than the task before you.
          If you get distracted, quickly get back into it, or you should cancel
          the timer. There is no pause as that's not how this works.
        </p>
        <InspirationalText />
        <Countdown />
        <TagContainer props={this.state} />
      </div>
    );
  }
}

const focusStyle = {
  color: "#9dcb30",
  textAlign: "center",
  marginTop: "30px"
};

const InspirationalText = () => (
  <h2 style={focusStyle}>Have a task that needs to be done?</h2>
);

export default Timer;
