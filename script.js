let playerScore = 0;
let computerScore = 0;
let totalGames= 0;
const rockButton = document.getElementsByClassName("rock-optn")[0];
const paperButton = document.getElementsByClassName("paper-optn")[0];
const scissorsButton = document.getElementsByClassName("scissors-optn")[0];
const roundResults = document.getElementsByClassName("round-results")[0];
const playerRoundInfo = document.getElementsByClassName("player-round-info")[0];
const computerRoundInfo = document.getElementsByClassName("computer-round-info")[0];
const playerSelectionDisplay = document.getElementsByClassName("player-selection")[0];
const computerSelectionDisplay = document.getElementsByClassName("computer-selection")[0];
rockButton.onclick =  function() {gameLog(0)};
paperButton.onclick = function() {gameLog(1)};
scissorsButton.onclick = function() {gameLog(2)};

// Computer randomly picks an number 0, 1, or 2 which will eventually be mapped
// to rock, paper or scissors, respectively.
function computerSelection() {
    return Math.floor(Math.random()*3)
}

// Get string input from from user and convert it to a number for the game's 
// model.



// two players and returns the result of the round.
function playRound(playerOne, playerTwo) {
let choices = ["rock", "paper", "scissors"];

    if (playerOne == playerTwo) {
        return {tie: true, winner: null, playerChoice: choices[playerOne], computerChoice: choices[playerTwo]}
    } else if ((playerOne + 1) % 3 == playerTwo ) {
        return {tie: false, winner: "computer", playerChoice: choices[playerOne], computerChoice: choices[playerTwo]}
    } else {
        return {tie: false, winner: "player", playerChoice: choices[playerOne], computerChoice: choices[playerTwo]}
    }
}

function updateDisplay(displayNode, newDisplayItem) {
    let itemSource = "images/" + newDisplayItem + ".png"
    if (displayNode.childElementCount !== 0 ) {
        displayNode.removeChild(displayNode.children[0]);
    } 
    let img = document.createElement("img")
    img.setAttribute("src", itemSource);
    displayNode.appendChild(img);
    
}


function gameLog(playerChoice) {
    let round = playRound(playerChoice, computerSelection());
    updateDisplay(playerSelectionDisplay, round.playerChoice);
    updateDisplay(computerSelectionDisplay, round.computerChoice);

    totalGames += 1;

    if (!round.tie) {
        if (round.winner == "player") {
            playerScore += 1;
                
        } else {
            computerScore += 1;
        }
    } 

    roundResults.innerHTML = `Round - ${totalGames}`;

    playerRoundInfo.innerText = `You - ${playerScore}`;
    computerRoundInfo.innerText = `Computer - ${computerScore}`;

    if (playerScore >= 5) {
        roundResults.innerHTML = "You won!";
        alert("Press F5 to play again");
    } else if (computerScore >= 5) {
        roundResults.innerHTML = "You lost";
        alert("Press F5 to play again");
    }
}


