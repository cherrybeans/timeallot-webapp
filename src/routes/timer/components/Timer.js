// @flow
import React, { Component } from "react";
import Tag from "../../../components/Tag/Tag";
import Button from "../../../components/Button/Button";
import Countdown from "../../../components/Countdown/Countdown";
import "./Timer.css";

class Timer extends Component {
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
        <div className="tag-container">
          <Tag title="timeallot" color="#9dcb30" />
          <Tag title="housework" color="#d02b51" />
          <Tag title="algdat" color="#f2720f" />
          <Tag title="math" color="#ecf14a" />
          <Tag title="webtek" color="#f980b4" />
          <Tag title="housework" color="#d02b51" />
          <Tag title="ITGK" color="#f2720f" />
          <Tag title="webkom" color="#9dcb30" />
          <Tag title="cooking" color="#ecf14a" />
          <Tag title="getting ready" color="#f980b4" />
        </div>
        <div className="tag-container">
          <Button txt="Add tags" />
        </div>
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
