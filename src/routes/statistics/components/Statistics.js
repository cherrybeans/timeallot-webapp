import React, { Component } from "react";
import BackButton from "../../../components/BackButton/BackButton";

class Statistics extends Component {
  render() {
    return (
      <div>
        <h1>
          <BackButton /> Statistics
        </h1>
        <p>
          See how you are doing, e.g. how many blocks you've done today, how you
          are doing according to your goals, all time statistics in general or
          spesific to projects.
        </p>
      </div>
    );
  }
}

export default Statistics;
