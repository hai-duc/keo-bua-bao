import React from "react";
import "./Display.css";
import rock from "../assets/rock.png";
import paper from "../assets/paper.png";
import scissors from "../assets/scissors.png";
import pcRock from "../assets/pc_rock.png";
import pcPaper from "../assets/pc_paper.png";
import pcScissors from "../assets/pc_scissors.png";

function Display({ user, pc, score }) {
  return (
    <div className="screen">
      <div className="column">
        {/* <img src={rock} alt="Rock" /> */}
        {user}
      </div>

      <div className="column">
        {/* <img src={pcPaper} alt="Paper" /> */}
        {pc}
      </div>
      
    </div>
  );
}

export default Display;
