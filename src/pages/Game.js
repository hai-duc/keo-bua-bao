import React from "react";
import Status from "../components/Status";
import Display from "../components/Display";
import Action from "../components/Action";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";

function Game() {
  const [score, setScore] = React.useState("");
  const [user, setUser] = React.useState("");
  const [pc, setPC] = React.useState("");
  const [tieUser, setTieUser] = React.useState(0);
  const [tiePc, setTiePc] = React.useState(0);

  return (
    <div className="container">
      <div className="status">
        <Status score={score} tieUser={tieUser} tiePc={tiePc} />

        <button>
          <Link to="/Home">Back</Link>
        </button>
      </div>
      <div className="display">
        <Display user={user} pc={pc} />
      </div>
      <div className="action">
        <Action
          setUser={setUser}
          setPC={setPC}
          setScore={setScore}
          setTieUser={setTieUser}
          setTiePc={setTiePc}
        />
      </div>
    </div>
  );
}

export default Game;
