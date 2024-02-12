# Guessing Game

This section of code defines a function called findWinner using arrow function syntax. This function is responsible for determining whether the user has won a guessing game.

### How It Works:

Generate Winning Number:

`const number = Math.ceil(Math.random() * 10);` Generates a random number between 1 and 10, which represents the winning number that the user needs to guess.

### Retrieve User's Guess:

`const guess = Number(document.getElementById("quantity").value);`
Retrieves the user's guess from an input field with the id "quantity". It converts the value to a number using `Number().`

### Check Validity of Guess:

`const isValidGuess = guess >= 1 && guess <= 10;`
Checks if the user's guess is valid, meaning it falls within the range of 1 to 10.

### Check if User Wins:

`const isWinner = guess === number;`
Checks if the user's guess matches the randomly generated winning number.

### Set Message:

`let message = "";
if (!isValidGuess) {
  message = "Please pick a number between 1 and 10";
} else if (isWinner) {
  message = "You win!!";
} else {
  message = `You lost. Sorry, the number was ${number}`;
} `

Based on the validity of the guess and whether the user has won, it sets the message variable accordingly.

### Display Message:

`alert(message);`

Finally, it displays the message using alert().

### Event Listener:

` document.getElementById("lockItInBtn").addEventListener("click", findWinner);`

Adds an event listener to a button with the id "lockItInBtn", so that when the button is clicked, the findWinner function is invoked.

# Functional Programming Characteristics:

Pure Functions: The findWinner function doesn't modify any external state and only relies on its input arguments to produce output.
Immutability: Variables are declared using const, indicating that their values cannot be changed once assigned.
Avoids Mutation: It doesn't mutate any variables or objects, but instead computes values based on the input and returns a result.
