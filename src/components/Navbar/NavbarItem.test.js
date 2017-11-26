// @flow
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavbarItem from "./NavbarItem";

const TestComponent = () => <h1>Hello, test!</h1>;

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <div>
        <NavbarItem link="/test" text="Test" />
        <Route exact path="/test" component={TestComponent} />
      </div>
    </Router>,
    div
  );
});
