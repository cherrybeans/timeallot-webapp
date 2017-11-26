// @flow
import React, { Component } from "react";
import Logo from "../Logo/Logo";
import NavbarItem from "./NavbarItem";
import FontAwesome from "react-fontawesome";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="navbar">
          <Logo />
          <div className="navbar-group">
            <NavbarItem text="Timer" link="/" exact={true} />
            <NavbarItem text="Statistics" link="/stats" />
            <NavbarItem text="Goals" link="/goals" />
          </div>
          <div className="navbar-group">
            <div className="navbar-username">Sigrid</div>
            <FontAwesome name="cog" />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
