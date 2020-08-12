import React from "react";
import Status from "../components/Status";
import Display from "../components/Display";
import Action from "../components/Action";

function Game() {
  const [score, setScore] = React.useState("");
  const [user, setUser] = React.useState("");
  const [pc, setPC] = React.useState("");
  const [tieUser, setTieUser] = React.useState("");
  const [tiePc, setTiePc] = React.useState("");

  return (
    <div className="container">
      <div className="status"> 
        <Status score={score} tieUser={tieUser} tiePc={tiePc}/>
      </div>
      <div className="display">
        <Display user={user} pc={pc} />
      </div>
      <div className="action">
        <Action setUser={setUser} setPC={setPC} setScore={setScore} setTieUser={setTieUser} setTiePc={setTiePc}/>
      </div>
    </div>
  );
}

export default Game;
