
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


let playerSelection = "ROCK";
let computerSelection = "ROCK";

function showComputerChoice(computerSelection) {
    if (computerSelection === "SCISSORS") {
        const element = document.getElementById("computer_weapon");
        element.innerHTML = "✂️";
    }
    else if (computerSelection === "PAPER") {
        const element = document.getElementById("computer_weapon");
        element.innerHTML = "📄";        
    }
    else {
        const element = document.getElementById("computer_weapon");
        element.innerHTML = "🪨";           
    }  
}

showComputerChoice(computerSelection);

playRound(playerSelection, computerSelection);