import React from "react";
import App from "../App";
import Game from "./Game";

function Home({ setHome, home, setGame, game, setPage }) {
  return (
    <div>
      <h1 className="Home">Home</h1>
      <button onClick={() => setGame("game")}>Game</button>
    </div>
  );
}
export default Home;
