
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "SCISSORS") {
        if (computerSelection === "PAPER") {
            const element = document.getElementById("score_text");
            element.innerHTML = "YOU WIN";
        }
        else if (computerSelection === "ROCK") {
            const element = document.getElementById("score_text");
            element.innerHTML = "YOU LOSE";
        }
        else {
            const element = document.getElementById("score_text");
            element.innerHTML = "IT'S A TIE";
        }
    }
    else if (playerSelection === "PAPER") {
        if (computerSelection === "ROCK") {
            const element = document.getElementById("score_text");
            element.innerHTML = "YOU WIN";
        }
        else if (computerSelection === "SCISSORS") {
            const element = document.getElementById("score_text");
            element.innerHTML = "YOU LOSE";
        }
        else {
            const element = document.getElementById("score_text");
            element.innerHTML = "IT'S A TIE";
        }
    }
    else {
        if (computerSelection === "SCISSORS") {
            const element = document.getElementById("score_text");
            element.innerHTML = "YOU WIN";
        }
        else if (computerSelection === "PAPER") {
            const element = document.getElementById("score_text");
            element.innerHTML = "YOU LOSE";
        }
        else {
            const element = document.getElementById("score_text");
            element.innerHTML = "IT'S A TIE";
        }
    }
}

let playerSelection = "SCISSORS";
let computerSelection = "PAPER";

playRound(playerSelection, computerSelection);