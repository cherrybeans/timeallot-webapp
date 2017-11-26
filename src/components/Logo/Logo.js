import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Logo.css";

class Logo extends Component {
  render() {
    return (
      <h1 className="logo">
        <NavLink to="/">timeallot</NavLink>
      </h1>
    );
  }
}

export default Logo;
