// @flow
import React, { Component } from "react";
import BackButton from "../../../components/BackButton/BackButton";

class UserProfile extends Component {
  render() {
    return (
      <div>
        <h1>
          <BackButton /> User Profile
        </h1>
        <p>Change your display name and login details.</p>
      </div>
    );
  }
}

export default UserProfile;
