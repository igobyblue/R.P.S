const choices = ["rock", "paper", "scissors"] //game picks between these inputs
const winners = [];

function game() { //this starts the game
    for (let i = 1; i <= 5; i++) {
        playRound(i);
    }
    logWins();
}

function playRound(round) { // this lets the players choice go against the computers
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection,computerSelection);
    winners.push(winner);
    logRound(playerSelection,computerSelection,winner,round)
}

function playerChoice() {
    let input = prompt('Type Rock, Paper, or Scissors');
    while (input == null) {
        input = prompt('Type Rock, Paper, or Scissors'); // allows canceled or blank input to not break code
    }
    input = input.toLowerCase(); //allows this to make player sting to be all lower case
    let check = validateInput(input); // checks if input is correct
    while (check == false) { // if input isnt correct it waits until it is
    input = prompt(
        "Error: Please make sure you type: Rock, Paper or Scissors"
    );
    while (input == null) {
        input = prompt("Type Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);   
    }
    return input;
}

function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)] // computer picks from rock paper or scissors
}


function validateInput(choice){ // checks to see if input is one of those three choices
   return choices.includes(choice);
}

function checkWinner(choiceP, choiceC){ // tells computer what choice wins over what
    if (choiceP === choiceC) {
        return 'Tie';
    } else if (
    (choiceP === 'rock' && choiceC == "scissors") || 
    (choiceP === 'paper' && choiceC == "rock") ||
    (choiceP === "scissors" && choiceC == "paper")
    ) {
        return "Player";
    } else {
        return "Comptuer!"
    }
}

function logWins() { // tracks the wins of player and computer
    let playerWins = winners.filter((bit) => bit == "Player").length;
    let computerWins = winners.filter((bit) => bit == "Computer").length;
    let ties = winners.filter((bit) => bit == "Tie").length;
    console.log("Results:");
    console.log("Player Wins:" , playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:" , ties);
}

function logRound(playerChoice,computerChoice,winner,round) { //
console.log ("Round:", round);
console.log('Player Chose:',playerChoice);
console.log('Computer Chose:',computerChoice);
console.log(winner, "Won the Round");
console.log("----------------------------------------------------")
}