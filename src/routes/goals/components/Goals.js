// @flow
import React, { Component } from "react";
import BackButton from "../../../components/BackButton/BackButton";

class Goals extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.submitGoal = this.submitGoal.bind(this);
  }

  submitGoal() {
    console.log("button clicked");
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <h1>
          <BackButton /> Goals
        </h1>
        <p>
          Set some goals like how many blocks you'd like to do every day, every
          week, in general or project spesific.{" "}
        </p>
        <button onClick={this.submitGoal}>Submit a Goal</button>
      </div>
    );
  }
}

export default Goals;
