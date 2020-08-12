import React from "react";
import "./Header.css";

function Header({ score, tieUser, tiePc }) {
  return (
    <div>
      <div>
        <h1 className="Header">{score}</h1>
        
      </div>
      <div className="tie">
        {tieUser}:{tiePc}
      </div>
    </div>
  );
}

export default Header;
