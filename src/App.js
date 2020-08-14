import "./App.css";
import React from "react";
import Game from "./pages/Game";
import Home from "./pages/Home";
import HightScore from "./pages/HightScore"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Game">
            <Game />
          </Route>
          <Route path="/HightScore">
            <HightScore />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
