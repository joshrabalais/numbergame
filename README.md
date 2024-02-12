# Number Guessing Game

This is a simple number guessing game implemented in JavaScript using an object-oriented approach. The game generates a random number between 1 and 10, and the player tries to guess the number by entering a value in the input field and clicking the "Lock It In" button.

### How to Play

1 Enter a number between 1 and 10 in the input field.
2 Click the "Lock It In" button to submit your guess.
3 You will receive a message indicating whether your guess was correct or not.

# Object-Oriented Approach

In this implementation, the game logic is encapsulated within a JavaScript class called NumberGame. Here's an overview of the class structure:

` class NumberGame {
constructor() {
this.number = Math.ceil(Math.random() \* 10);
}

playGame() {
// Game logic goes here
}
} `

### Constructor

The constructor initializes the number property with a random number between 1 and 10 when a new instance of the NumberGame class is created.

### playGame() Method

The playGame() method contains the core game logic. It takes the player's guess from the input field, validates it, compares it with the randomly generated number, and displays an appropriate message to the player.
