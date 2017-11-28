// @flow
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Logo from "./Logo";

const TestComponent = () => <h1>Hello, test!</h1>;

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <div>
        <Logo />
        <Route exact path="/test" component={TestComponent} />
      </div>
    </Router>,
    div
  );
});
