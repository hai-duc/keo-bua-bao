import React from "react";
import "./Action.css";

import rockButton from "../assets/r_button.png";
import paperButton from "../assets/p_button.png";
import scissorsButton from "../assets/s_button.png";
import rock from "../assets/rock.png";
import paper from "../assets/paper.png";
import scissors from "../assets/scissors.png";
import pcrock from "../assets/pc_rock.png";
import pcpaper from "../assets/pc_paper.png";
import pcscissors from "../assets/pc_scissors.png";

const MAX_TURN = 5;

function Action({ setUser, setPC, setScore, setTieUser, setTiePc }) {
  const [tieUserMedium, setTieUserMedium] = React.useState(0);
  const [tiePcMedium, setTiePcMedium] = React.useState(0);
  const [turnPlay, setturnPlay] = React.useState(0);

  function userChoose(choice) {
    let scores = "";
    let pcchoice;
    let scoreUser = choice;
    let tieTurnUser = 0;
    let tieTurnPc = 0;

    //người chọn//
    if (choice == "Rock") {
      choice = <img src={rock} />;
    } else if (choice == "Paper") {
      choice = <img src={paper} />;
    } else if (choice == "Scissors") {
      choice = <img src={scissors} />;
    }
    setUser(choice);
    //máy random

    const pcRandoms = ["Rock", "Paper", "Scissors"];
    pcchoice = pcRandoms[Math.floor(Math.random() * pcRandoms.length)];
    let scorePC = pcchoice;

    // console.log(pcchoice)
    if (pcchoice == "Rock") {
      pcchoice = <img src={pcrock} />;
    } else if (pcchoice == "Paper") {
      pcchoice = <img src={pcpaper} />;
    } else if (pcchoice == "Scissors") {
      pcchoice = <img src={pcscissors} />;
    }
    setPC(pcchoice);

    //kết quả

    if (
      (scoreUser == "Rock" && scorePC == "Scissors") ||
      (scoreUser == "Paper" && scorePC == "Rock") ||
      (scoreUser == "Scissors" && scorePC == "Paper")
    ) {
      scores = "Win";
    } else {
      scores = "Lose";
    }
    if (scoreUser == scorePC) {
      scores = "Draw";
    }

    setScore(scores);
    //Ti so
    if (scores == "Win") {
      tieTurnUser = tieUserMedium + 1;
      tieTurnPc = tiePcMedium;
    } else if (scores == "Lose") {
      tieTurnPc = tiePcMedium + 1;
      tieTurnUser = tieUserMedium;
    } else if (scores == "Draw") {
      tieTurnPc = tiePcMedium;
      tieTurnUser = tieUserMedium;
    }

    //luot choi
    if(turnPlay === MAX_TURN){
      alert("bạn đã hết lượt chơi")
    }
    // console.log(tieTurnUser, tieTurnPc);
    // console.log(tieUserMedium, tiePcMedium);
    setTieUserMedium(tieTurnUser);
    setTiePcMedium(tieTurnPc);
    setTieUser(tieTurnUser);
    setTiePc(tieTurnPc);
    setturnPlay(turnPlay + 1);
  }

  return (
    <div className="button-group">
      <div className="button">
        <img
          src={rockButton}
          alt="Rock"
          onClick={() => userChoose("Rock")}
          // onClick={() => totalScore("Rock")}
        />
      </div>

      <div className="button">
        <img
          src={paperButton}
          alt="Paper"
          onClick={() => userChoose("Paper")}
          // onDoubleClick={() => pcChoose("Paper")}
        />
      </div>

      <div className="button">
        <img
          src={scissorsButton}
          alt="Scissors"
          onClick={() => userChoose("Scissors")}
          // onDoubleClick={() => pcChoose("scissors")}
        />
      </div>
    </div>
  );
}

export default Action;
