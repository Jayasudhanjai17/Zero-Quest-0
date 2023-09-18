import React from "react";


const Player1 = function (props) {
  const playerStyle = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    maxWidth: "100%",
  };
  return (
    <div className="container" >
      <h1 style={playerStyle}>{props.player1}</h1>
    </div>
  );
};

export default Player1;
