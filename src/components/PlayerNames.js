import React, { useState } from "react";

const PlayerNames = ({ onNamesSubmit }, { props }) => {
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
  const start = function () {
    props.setStart(true);
  };

  return (
    <div className=" container">
      <div className=" playername ">
        <div>
          <h2>Enter Player Names</h2>
          <form onSubmit={handleSubmit}>
            
             <b> Player 1 Name:</b>
              <input
              className="plr"
                type="text"
                value={player1Name}
                onChange={handlePlayer1NameChange}
                required
              />
           
            <br />
        
             <b> Player 2 Name:</b>
              <input
              className="plr"
                type="text"
                value={player2Name}
                onChange={handlePlayer2NameChange}
                required
              />
        
            <br />
            <button type="submit" className="  btn btn-info tart">Start Game</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlayerNames;
