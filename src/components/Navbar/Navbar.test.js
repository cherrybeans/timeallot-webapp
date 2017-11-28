// @flow

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { shallow } from "enzyme";
import Navbar from "./Navbar";

it("renders without crashing", () => {
  shallow(
    <Router>
      <Navbar />
    </Router>
  );
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Navbar />
    </Router>,
    div
  );
});
