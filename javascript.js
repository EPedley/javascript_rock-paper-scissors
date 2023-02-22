
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "SCISSORS") {
        if (computerSelection === "PAPER") {
            console.log("YOU WIN");
        }
        else if (computerSelection === "ROCK") {
            console.log("YOU LOSE");
        }
        else {
            console.log("IT'S A TIE");
        }
    }
    else if (playerSelection === "PAPER") {
        if (computerSelection === "ROCK") {
            console.log("YOU WIN");
        }
        else if (computerSelection === "SCISSORS") {
            console.log("YOU LOSE");
        }
        else {
            console.log("IT'S A TIE");
        }
    }
    else {
        if (computerSelection === "SCISSORS") {
            console.log("YOU WIN");
        }
        else if (computerSelection === "PAPER") {
            console.log("YOU LOSE");
        }
        else {
            console.log("IT'S A TIE");
        }
    }
}

let playerSelection = "ROCK";
let computerSelection = "SCISSORS";

playRound(playerSelection, computerSelection);