const choices = ["rock", "paper", "scissors"] //game picks between these inputs
const winners = [];

function resetGame();

function startGame(); { //this starts the game
    let imgs = document.querySelector('img')
    imgs.forEach((img) =>
    img.addEventListener(('click'), () => {
        if (img.id) {
            playRound(img.id);
        }
    })
    )
};

function playRound(playerChoice); { // this lets the players choice go against the computers
    const computerSelection = computerChoice();

    const winner = checkWinner(playerSelection,computerSelection);

    winners.push(winner);
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

}

function logRound(playerChoice,computerChoice,winner,round) { //

}