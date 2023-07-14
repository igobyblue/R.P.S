const choices = ["rock", "paper", "scissors"] //game picks between these inputs

function game() { //this starts the game
    playRound();
}

function playRound() { // this lets the players choice go against the computers
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
}

function playerChoice() {
    let input = prompt('Type Rock, Paper, or Scissors');
    while(input == null){
        input = prompt('Type Rock, Paper, or Scissors'); // allows canceled or blank input to not break code
    }
    input = input.toLowerCase(); //allows this to make player sting to be all lower case
    let check = validateInput(input); // checks if input is correct
   while (check == false) {
    input = prompt('Error: Please make sure you type: Rock, Paper or Scissors');
    input = input.toLowerCase();
    check = validateInput(input);   
    }
}

function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)]
}


function validateInput(choice){
   return choices.includes(choice);
}

game();