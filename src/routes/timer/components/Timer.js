// @flow
import React, { Component } from "react";
import Tag from "../../../components/Tag/Tag";
import Button from "../../../components/Button/Button";
import Countdown from "../../../components/Countdown/Countdown";
import "./Timer.css";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [
        { id: 1, text: "timeallot" },
        { id: 2, text: "housework" },
        { id: 4, text: "math" },
        { id: 5, text: "webtek" },
        { id: 3, text: "procrastinating" },
        { id: 6, text: "algdat" },
        { id: 8, text: "ITGK" },
        { id: 9, text: "getting ready" },
        { id: 7, text: "webkom" }
      ]
    };

    this.addTags = this.addTags.bind(this);
    this.removeTags = this.removeTags.bind(this);
  }

  addTags() {
    console.log("add");
  }

  removeTags(id) {
    var newState = this.state;
    var index = newState.tags.findIndex(tag => tag.id === id);

    if (index > -1) {
      newState.tags.splice(index, 1);
    }

    this.setState(newState);
  }

  render() {
    const tags = this.state.tags;
    var tagElements = tags.map((tag, i) => {
      return (
        <Tag
          key={tag.id}
          index={i}
          title={tag.text}
          onClick={() => this.removeTags(tag.id)}
        />
      );
    });
    console.log(tagElements);

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
        <h2 style={{ textAlign: "center" }}>Tags</h2>
        <div className="tag-container">{tagElements}</div>
        <div className="tag-container">
          <Button onClick={this.addTags} txt="Add tags" />
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
