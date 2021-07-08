

// Computer randomly picks an number 0, 1, or 2 which will eventually be mapped
// to rock, paper or scissors, respectively.
function computerSelection() {
    return Math.floor(Math.random()*3)
}

// Get string input from from user and convert it to a number for the game's 
// model.
function playerSelection() {
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    playerChoice = playerChoice.toLowerCase();
    return mapChoiceToNum(playerChoice);
}

//Mapping rock, paper and scissors to 0, 1 and 2 respectively 
function mapChoiceToNum(choice) {
    switch(choice) {
        case "rock":
            return 0;
        case "paper":
            return 1;
        case "scissors":
            return 2;
    }
}
// Takes in a number representations of rock, paper, and scissors as input from
// two players and returns the result of the round.
function playRound(playerOne, playerTwo) {
let choices = ["rock", "paper", "scissors"];

    if (playerOne == playerTwo) {
        return `Both chose ${choices[playerOne]}. It's a tie!`
    } else if ((playerOne + 1) % 3 == playerTwo ) {
        return `You lost. You chose ${choices[playerOne]} and the Computer chose ${choices[playerTwo]}`
    } else {
        return `You won the round! You chose ${choices[playerOne]} and the Computer chose ${choices[playerTwo]}`
    }
}

function game() {
    alert(playRound(playerSelection(), computerSelection()));
}


