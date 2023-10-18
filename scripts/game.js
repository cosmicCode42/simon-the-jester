/* We need:
 game object DONE
 newGame() function DONE
 addTurn() function DONE
 showTurns() function
 lightsOn() function DONE
 playerTurn() function
 showScore() function DONE */

let game = {
  score: 0,
  currentGame: [],
  playerMoves: [],
  turnNumber: 0,
  choices: ["button1", "button2", "button3", "button4"],
};

const newGame = () => {
    // needs to reset score, reset currentGame, and reset playerMoves
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
    showTurns();
};

// causes buttons to light up during play
const lightsOn = circ => {
    document.getElementById(circ).classList.add("light"); // adds light-up effect
    setTimeout(() => {
        document.getElementById(circ).classList.remove("light");
    }, 400); // removes light-up effect after 400 ms
};

const showTurns = () => {
    // needs to step through currentGame, turn lights on, and turn lights off
    game.turnNumber = 0;
    let turns = setInterval(() => {
        lightsOn(game.currentGame[game.turnNumber]);
        game.turnNumber++;
        if (game.turnNumber >= game.currentGame.length) {
            clearInterval(turns);
        }
    }, 800);
};

module.exports = { game, newGame, showScore, addTurn, lightsOn, showTurns };