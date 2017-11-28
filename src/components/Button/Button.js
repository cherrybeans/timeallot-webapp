// @flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Button.css";

class Button extends Component {
  render() {
    let txt = this.props.txt;
    return <button>{txt}</button>;
  }
}

Button.propTypes = {
  txt: PropTypes.string
};

Button.defaultProps = {
  txt: "It's a button!"
};

export default Button;
