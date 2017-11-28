// @flow
import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    let txt = this.props.txt;
    let func = this.props.onClick;
    return <button onClick={func}>{txt}</button>;
  }
}

Button.defaultProps = {
  txt: "It's a button!"
};

export default Button;
