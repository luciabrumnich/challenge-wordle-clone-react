import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Letter({ letterPosition, attemptValue }) {
  const { board, correctWord, currentAttempt, setDisabledLetters } =
    useContext(AppContext);

  //letter nos da acceso a cada letra, individualmente
  const letter = board[attemptValue][letterPosition];

  const correct = correctWord.toUpperCase()[letterPosition] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);

  //mostramos el resultado del intento solo despues de presionar "Enter"
  const letterState =
    currentAttempt.attempt > attemptValue &&
    (correct ? "correct" : almost ? "almost" : "error");

  //letras ya ingresadas que no están incluídas en la palabra a adivinar
  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((previousLetter) => [...previousLetter, letter]);
    }
  }, [currentAttempt.attempt]);

  return (
    <div className="letter" id={letterState}>
      {" "}
      {letter}
    </div>
  );
}

export default Letter;
