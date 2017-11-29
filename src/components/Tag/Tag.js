// @flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Tag.css";

class Tag extends Component {
  render() {
    const tagStyle = {
      backgroundColor: this.props.color
    };
    let title = this.props.title;
    return (
      <div className="tag" style={tagStyle}>
        {title}
      </div>
    );
  }
}

Tag.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string
};

Tag.defaultProps = {
  title: "It's a tag!",
  color: "#aeaeae"
};

export default Tag;
