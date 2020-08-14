import React from "react";
import App from "../App";
import Game from "./Game";

import "./Home.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home({ setHome, home, setGame, game, setPage }) {
  return (
    <div className="content">
      <div className="title">Home</div>
      <button>
        <Link to="/Game">Game</Link>
      </button>
      <button>
        <Link to="/HightScore">HighScore</Link>
      </button>
    </div>
  );
}
export default Home;
