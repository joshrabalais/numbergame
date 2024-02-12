const findWinner = () => {
  const number = Math.ceil(Math.random() * 10);
  const guess = Number(document.getElementById("quantity").value);

  const isValidGuess = guess >= 1 && guess <= 10;
  const isWinner = guess === number;

  let message = "";
  if (!isValidGuess) {
    message = "Please pick a number between 1 and 10";
  } else if (isWinner) {
    message = "You win!!";
  } else {
    message = `You lost. Sorry, the number was ${number}`;
  }

  alert(message);
};

document.getElementById("lockItInBtn").addEventListener("click", findWinner);
