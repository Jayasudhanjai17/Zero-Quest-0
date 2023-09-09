import React, { useState } from "react";

const PlayerNames = ({ onNamesSubmit } ,{props}) => {
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");

  const handlePlayer1NameChange = (event) => {
    setPlayer1Name(event.target.value);
  };

  const handlePlayer2NameChange = (event) => {
    setPlayer2Name(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    // Pass the entered names to the parent component
    onNamesSubmit(player1Name, player2Name);
  };
  const  start=function(){
    props.setStart(true);
  }

  return (
    <div>
      <h2>Enter Player Names</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Player 1 Name:
          <input
            type="text"
            value={player1Name}
            onChange={handlePlayer1NameChange}
            required
          />
        </label>
        <br />
        <label>
          Player 2 Name:
          <input
            type="text"
            value={player2Name}
            onChange={handlePlayer2NameChange}
            required
          />
        </label>
        <br />
        <button type="submit" >Start Game</button>
      </form>
    </div>
  );
};

export default PlayerNames;
