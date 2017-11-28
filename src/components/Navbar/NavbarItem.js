// @flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./NavbarItem.css";

class NavbarItem extends Component {
  render() {
    return (
      <div className="navbar-item">
        <NavLink
          activeClassName="activeNav active-navbar-item"
          exact={this.props.exact}
          to={this.props.link}
        >
          {this.props.text}
        </NavLink>
      </div>
    );
  }
}

NavbarItem.propTypes = {
  exact: PropTypes.bool,
  link: PropTypes.string.isRequired
};

NavbarItem.defaultProps = {
  exact: false
};

export default NavbarItem;
