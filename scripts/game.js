/* We need:
 game object DONE
 newGame() function DONE
 addTurn() function DONE
 showTurns() function DONE
 lightsOn() function DONE
 playerTurn() function DONE
 showScore() function DONE */

let game = {
  // holds the score, current game moves, player's moves, turn number, and each button that can be pressed
  score: 0,
  currentGame: [],
  playerMoves: [],
  turnNumber: 0,
  choices: ["button1", "button2", "button3", "button4"],
  lastButton: "",
  turnInProgress: false,
};

const newGame = () => {
    // needs to reset score, reset currentGame, and reset playerMoves
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    // then needs to start the first turn of the game!
    for (let circle of document.getElementsByClassName("circle")) {
        if (circle.getAttribute("data-listener") !== "true") {
            circle.addEventListener("click", (e) => {
                if (game.currentGame.length > 0 && !game.turnInProgress) { // makes sure a game has started and the computer's turn is not in progress
                    let move = e.target.getAttribute("id"); // your player's move; each click is 1
                    game.lastButton = move;
                    lightsOn(move);
                    game.playerMoves.push(move);
                    playerTurn();
                }
            })
            circle.setAttribute("data-listener", "true");
        }
    }
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
    game.turnInProgress = true;
    game.turnNumber = 0;
    let turns = setInterval(() => {
        lightsOn(game.currentGame[game.turnNumber]);
        game.turnNumber++;
        if (game.turnNumber >= game.currentGame.length) {
            clearInterval(turns);
            game.turnInProgress = false;
        }
    }, 800);
};

const playerTurn = () => {
    // needs to store what the player clicks, check it against the currentGame, continue game if correct and exit game with alarm if incorrect
    
    // get last move from playerMoves
    let i =  game.playerMoves.length - 1;
    // if the playerMoves gets to the end of the sequence, the player has succeeded. increment the score
    if (game.currentGame[i] === game.playerMoves[i] ){
        if (game.currentGame.length === game.playerMoves.length) {
            game.score++;
            showScore();
            addTurn();
        }
    } else { // otherwise interrupt the game with an alert and start a new game
        alert("Wrong move!");
        newGame();
    }
}

module.exports = { game, newGame, showScore, addTurn, lightsOn, showTurns, playerTurn }; // testing, testing...