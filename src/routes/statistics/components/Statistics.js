// @flow
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
const sessions = [
  {
    id: 1,
    duration: 25,
    project: 1,
    subtags: [
      { tag_name: "planning" },
      { tag_name: "designing" },
      { tag_name: "researching" },
      { tag_name: "programming" }
    ]
  },
  {
    id: 2,
    duration: 25,
    project: 2,
    subtags: [{ tag_name: "laundry" }, { tag_name: "housecleaning" }]
  },
  {
    id: 3,
    duration: 25,
    project: 3,
    subtags: [{ tag_name: "assignments" }]
  }
];

export default Statistics;
