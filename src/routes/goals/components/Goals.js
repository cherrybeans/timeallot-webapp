import React, { Component } from "react";

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
        <h2>Goals</h2>
        <button onClick={this.submitGoal}>Submit a Goal</button>
      </div>
    );
  }
}

export default Goals;
