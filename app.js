const createGame = () => {
  const body = document.querySelector("body");
  const input = document.querySelector("#input");
  const button = document.querySelector("#submitBtn");
  const message = document.querySelector(".message");

  const correctAnswer = Math.floor(Math.random() * 10) + 1;
  let leftGuesses = 3;

  const warningMessage = (text, color) => {
    body.style.backgroundColor = color;
    message.textContent = text;
  };

  const handleGuess = () => {
    if (input.value !== "") {
      let guess = parseInt(input.value);
      leftGuesses--;

      if ((guess < 1 || guess > 10) && leftGuesses > 0) {
        warningMessage(
          `Enter a number from 1 to 10. ${leftGuesses} guesses left.`,
          "yellow"
        );
        input.value = "";
      } else if (guess === correctAnswer) {
        input.disabled = true;
        warningMessage(`YOU WON!!! :) Correct answer: ${guess}`, "green");
        button.textContent = "Play Again";
      } else if (guess !== correctAnswer && leftGuesses > 0) {
        warningMessage(
          `Wrong answer! :| ${leftGuesses} guesses left.`,
          "yellow"
        );
        input.value = "";
      } else if (leftGuesses <= 0) {
        input.disabled = true;
        warningMessage(
          `YOU LOST!!! :( Correct answer: ${correctAnswer}`,
          "red"
        );
        button.textContent = "Play Again";
      } else {
        alert("Something went wrong!!! :(");
      }
    }
  };

  button.addEventListener("click", handleGuess);
};

createGame();
