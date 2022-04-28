import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const { gameOver, currentAttempt, correctWord } = useContext(AppContext);
  return (
    <div className="gameover">
      <h3>{gameOver.guessedWord ? "WELL DONE!" : "YOU FAILED"}</h3>
      <h1>CORRECT: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>YOU MADE IT IN {currentAttempt.attempt} ATTEMPTS</h3>
      )}
    </div>
  );
}

export default GameOver;
