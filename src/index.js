// @flow
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import "./index.css";

import Navbar from "./components/Navbar/Navbar";
import Timer from "./routes/timer/components/Timer";
import Settings from "./routes/settings/components/Settings";
import Statistics from "./routes/statistics/components/Statistics";
import Goals from "./routes/goals/components/Goals";
import UserProfile from "./routes/userprofile/components/UserProfile";

const history = createBrowserHistory();

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <main>
        <Route exact path="/" component={Timer} />
        <Route path="/stats" component={Statistics} />
        <Route path="/goals" component={Goals} history={history} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/settings" component={Settings} />
      </main>
    </div>
  </Router>,
  document.getElementById("root")
);
