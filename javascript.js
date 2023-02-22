//function to decide who the winner is
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

//function to change the image in the results element depending on the computer's choice
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

//function to show the image in the results element depending on the player's choice
function showPlayerChoice(playerSelection) {
    if (playerSelection === "SCISSORS") {
        const element = document.getElementById("player_weapon");
        element.innerHTML = "✂️";
    }
    else if (playerSelection === "PAPER") {
        const element = document.getElementById("player_weapon");
        element.innerHTML = "📄";        
    }
    else {
        const element = document.getElementById("player_weapon");
        element.innerHTML = "🪨";           
    }  
}

function getPlayerChoice() {
    return "SCISSORS";
}

//function to get a random selection from the computer
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    console.log(random);
    if (random === 0) {
        choice = "ROCK";
        return choice;
    }
    else if (random === 1) {
        choice = "PAPER";
        return choice;
    }
    else {
        choice = "SCISSORS"
        return choice;
    }
}

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

showComputerChoice(computerSelection);

showPlayerChoice(playerSelection);

playRound(playerSelection, computerSelection);