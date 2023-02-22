const buttons = document.querySelectorAll('button');
let player_counter = 0;
let computer_counter = 0;

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

//function to get a random selection from the computer
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
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

//listen to the buttons
buttons.forEach(button =>{
    button.addEventListener('click', function(){
    game(button.value)
})
})

function playRound(playerSelection) {
    //call the function that decides the computer's weapon
    let computerSelection = getComputerChoice();

    //call the functions that show the users the weapons used
    showComputerChoice(computerSelection);
    showPlayerChoice(playerSelection);

    let log = "";

        if (playerSelection === "SCISSORS") {
            if (computerSelection === "PAPER") {
                const element = document.getElementById("score_text");
                element.innerHTML = "YOU WIN";
                log = "PLAYER";
            }
            else if (computerSelection === "ROCK") {
                const element = document.getElementById("score_text");
                element.innerHTML = "YOU LOSE";
                log = "COMPUTER";
            }
            else {
                const element = document.getElementById("score_text");
                element.innerHTML = "IT'S A TIE";
                log = "TIE";
            }
        }
        else if (playerSelection === "PAPER") {
            if (computerSelection === "ROCK") {
                const element = document.getElementById("score_text");
                element.innerHTML = "YOU WIN";
                log = "PLAYER";
            }
            else if (computerSelection === "SCISSORS") {
                const element = document.getElementById("score_text");
                element.innerHTML = "YOU LOSE";
                log = "COMPUTER";
            }
            else {
                const element = document.getElementById("score_text");
                element.innerHTML = "IT'S A TIE";
                log = "TIE";
            }
        }
        else {
            if (computerSelection === "SCISSORS") {
                const element = document.getElementById("score_text");
                element.innerHTML = "YOU WIN";
                log = "PLAYER";
            }
            else if (computerSelection === "PAPER") {
                const element = document.getElementById("score_text");
                element.innerHTML = "YOU LOSE";
                log = "COMPUTER";
            }
            else {
                const element = document.getElementById("score_text");
                element.innerHTML = "IT'S A TIE";
                log = "TIE";
            }
        }
        return log;
    }

function game(playerSelection) {
    const player_counter_element = document.getElementById("player_counter");
    player_counter_element.innerHTML = player_counter;

    const computer_counter_element = document.getElementById("computer_counter");
    computer_counter_element.innerHTML = computer_counter;

    winner = playRound(playerSelection);

    if (winner === "PLAYER") {
        ++player_counter;
        player_counter_element.innerHTML = player_counter;
    }
    else if (winner === "COMPUTER") {
        ++computer_counter;
        computer_counter_element.innerHTML = computer_counter;
    }
    if (player_counter === 5) {
        location.href = './you_win.html';
    }
    else if (computer_counter === 5) {
        location.href = './you_lose.html';
    }
}
