import React, { Component } from "react";
import BackButton from "../../../components/BackButton/BackButton";

class Settings extends Component {
  render() {
    return (
      <div>
        <h1>
          <BackButton /> Settings
        </h1>
        <p>
          In the future you can do stuff here, like change the theme, set a
          different sound, change timer duration, delete data, and backup data.
        </p>
      </div>
    );
  }
}

export default Settings;
