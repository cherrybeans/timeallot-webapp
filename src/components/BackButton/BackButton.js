// @flow
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import FontAwesome from "react-fontawesome";

class BackButton extends Component {
  render() {
    return (
      <NavLink to="/">
        <FontAwesome name="arrow-circle-left" />
      </NavLink>
    );
  }
}

export default BackButton;
