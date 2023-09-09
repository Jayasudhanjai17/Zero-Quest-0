import React from "react";
// import "./GameRules.css"; // Import your CSS file for styling

const GameRules = ({ player1Name, player2Name, total }) => {
  return (
    <div className="game-rules">
      <h2>Game Rules</h2>
      <div className="rule">
        <strong>Starting Total:</strong> The game starts with {total}.
      </div>
      <div className="rule">
        <strong>Turn-Based Play:</strong> Players take turns to make a move.
      </div>
      <div className="rule">
        <strong>Available Moves:</strong> On each turn, a player can choose to subtract either 1, 2, or 3 from the current total.
      </div>
      <div className="rule">
        <strong>Update Total:</strong> After a player selects a move, the chosen number is subtracted from the total. The total is then updated.
      </div>
      <div className="rule">
        <strong>Winning Condition:</strong> The game continues until one player successfully reduces the total to zero. That player is declared the winner.
      </div>
      <div className="rule">
        <strong>Alternate Turns:</strong> Players take alternate turns, starting with Player1.
      </div>
      <div className="rule">
        <strong>Valid Moves:</strong> A player cannot select a number that would result in a negative total.
      </div>
      <div className="rule">
        <strong>Game Reset:</strong> After a player wins, the game can be reset to the initial total to play again.
      </div>
    </div>
  );
};

export default GameRules;
