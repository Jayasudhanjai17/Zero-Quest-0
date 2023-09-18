import React from "react";

const Player2 = function (props) {
  const playerStyle = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    maxWidth: "100%",
  };
  return (
    <div className="container" >
    <h1 style={playerStyle}>{props.player2}</h1>
  </div>
  );
};

export default Player2;
