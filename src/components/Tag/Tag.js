import React, { Component } from "react";
import PropTypes from "prop-types";
import FontAwesome from "react-fontawesome";
import "./Tag.css";

class Tag extends Component {
  render() {
    const tagStyle = {
      backgroundColor: this.props.color
    };
    let title = this.props.title;
    return (
      <div className="tag" style={tagStyle}>
        {title} <RemoveTag />
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

const RemoveTag = () => <FontAwesome name="times" />;

export default Tag;
