/* We need:
 game object
 newGame() function
 addTurn() function
 showTurns() function
 lightsOn() function
 playerTurn() function
 showScore() function */

let game = {
  score: 0,
  currentGame: [],
  playerMoves: [],
  choices: ["button1", "button2", "button3", "button4"],
};

const newGame = () => {
    // needs to reset score, reset currentGame, and reset playerMoves?
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    showScore();
    addTurn();
};

// resets score on the page
const showScore = () => document.getElementById("score").innerText = game.score;

// adds a turn to the game in progress
const addTurn = () => {
    // must clear playerMoves, get random IDs for currentGame, and call showTurns
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]); // gets a number from 0 to 3 to use as index
    // showTurns();
};

// causes buttons to light up during play
const lightsOn = circ => {
    document.getElementById(circ).classList.add("light"); // adds light-up effect
    setTimeout(() => {
        document.getElementById(circ).classList.remove("light");
    }, 400); // removes light-up effect after 400 ms
};

module.exports = { game, newGame, showScore, addTurn, lightsOn };