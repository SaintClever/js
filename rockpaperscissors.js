////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var move = Math.random(); // Write an expression that operates on a variable called `move`
    if (move < 2) { // If a `move` has a value, your expression should evaluate to that value.
        return "Try Again.";
    } else if (move < 4) { // However, if `move` is not specified / is null, your expression should equal `getInput()`.
        return "Your're almost there.";
    } else {
        return "Now thats what I'm talking about!"; /* Your Expression */
    }
}

function getComputerMove(move) {
    var move = Math.random(); // Write an expression that operates on a variable called `move`
    if (move == 5 || move == 10) { // If a `move` has a value, your expression should evaluate to that value.
        return move;
    } else if (move == null) { // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
        return randomPlay();
    } else {
        return "What?"; /* Your Expression */
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === "rock" && computerMove === "rock") {
        winner = "tie";
    }
    else if(playerMove === "rock" && computerMove === "paper") {
        winner = "computer";
    }
    else if(playerMove === "rock" && computerMove === "scissors") {
        winner = "player";
    }
    else if(playerMove === "paper" && computerMove === "rock") {
        winner = "player";
    }
    else if(playerMove === "paper" && computerMove === "paper") {
        winner = "tie";
    }
    else if(playerMove === "paper" && computerMove === "scissors") {
        winner = "computer";
    }
    else if(playerMove === "scissors" && computerMove === "rock") {
        winner = "computer";
    }
    else if(playerMove === "scissors" && computerMove === "paper") {
        winner = "player";
    }
    else if(playerMove === "scissors" && computerMove === "scissors") {
        winner = "tie";
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    // This function should continue to play Rock Paper Scissors until either the player or the computer has won five times.
    while (playerWins != 5 || computerWins != 5) {
        return playToFive;
    }
    
    // After each 'round', display some text in the console indicating who played what, who won, and what the current scoreboard looks like.
    if (playerWins <= 1 || >= 5) {
        console.log('playerMove' + 'winner' + 'playerWins');
        return playerWins;
    }
    // For example,
    //  console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
    //  console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
    
    if (computerWins <= 1 || >= 5) {
        console.log('computerMove' + 'winner' + 'computerWins');
        return computerWins;
    }
    
    else   
    return [playerWins, computerWins];
}

