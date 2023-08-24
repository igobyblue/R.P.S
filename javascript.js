const choices = ["rock", "paper", "scissors"]; //game picks between these inputs
let winners = [];

function resetGame() {

}

function startGame() {
    let imgs = document.querySelectorAll("img");
    imgs.forEach((img) =>
      img.addEventListener("click", () => {
        if (img.id) {
          playRound(img.id);
        }
      })
    );
}

function playRound(playerInput) { // this lets the players choice go against the computers
    let wins = checkWins(); 
    if (wins >= 5) {
        return;
    }
    
    const computerInput = computerSelection();

    const winner = checkWinner(playerInput,computerInput);
    winners.push(winner);
    tallyWins();
    displayRound(playerInput,computerInput, winner);
    wins = checkWins();
    if (wins == 5) {
        displayEnd();
    }
}

function displayEnd() {
    let playerWinsNumber = winners.filter((bit) => bit == "Player").length;
    if (playerWinsNumber == 5) {
        document.querySelector('.winner').textContent = ('You Won 5 Games! Congratulations!')
    }
    else {
        document.querySelector('.winner').textContent =( 'The Computer Won 5 Games! Better Luck Next Time!')
    }
    document.querySelector('.reset').style.display = "flex";
}


function displayRound (playerInput,computerInput,winner) {
    document.querySelector('.playerChoice').textContent = `You chose: ${playerInput.charAt(0).toUpperCase() + playerInput.slice(1)}`;
    document.querySelector('.computerChoice').textContent = `Computer chose: ${computerInput.charAt(0).toUpperCase() + computerInput.slice(1)}`;
    document.querySelector('.winner').textContent = `Round Winner: ${winner}`
}

function displayRoundWinner(winner) {
    if (winner == "Player"){
        document.querySelector('.winner').textContent = "You won the Round!"
    }
}


function tallyWins() {
    const playerWins = winners.filter((bit) => bit == "Player").length;
    const computerWins = winners.filter((bit) => bit == "Computer").length;
    const ties = winners.filter((bit) => bit == "Tie").length;
    document.querySelector('.playerScore').textContent = `Score: ${playerWins}`;
    document.querySelector('.computerScore').textContent = `Score: ${computerWins}`;
    document.querySelector('.ties').textContent = `Ties: ${ties}`;

};


function checkWins() { // tracks the wins of player and computer
    const playerWins = winners.filter((bit) => bit == "Player").length;
    const computerWins = winners.filter((bit) => bit == "Computer").length; 
   return Math.max(playerWins,computerWins);
 };




// function playerChoice() {
   // let input = prompt('Type Rock, Paper, or Scissors');
    // while (input == null) {
       // input = prompt('Type Rock, Paper, or Scissors'); // allows canceled or blank input to not break code
   // }
   // input = input.toLowerCase(); //allows this to make player sting to be all lower case
   // let check = validateInput(input); // checks if input is correct
   // while (check == false) { // if input isnt correct it waits until it is
   // input = prompt(
     //   "Error: Please make sure you type: Rock, Paper or Scissors"
   // );
   // while (input == null) {
    //    input = prompt("Type Rock, Paper, or Scissors");
   // }
   // input = input.toLowerCase();
   // check = validateInput(input);   
   // }
    // return input;
// }

function computerSelection() {
    return choices[Math.floor(Math.random() * choices.length)];// computer picks from rock paper or scissors
}


//function validateInput(choice){ // checks to see if input is one of those three choices
  // return choices.includes(choice);
//}


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
        return "Comptuer!";
    }
}

function logWins() { // tracks the wins of player and computer
    let playerWins = winners.filter((bit) => bit == "Player").length;
    let computerWins = winners.filter((bit) => bit == "Computer").length;
    let ties = winners.filter((bit) => bit == "Tie").length;

}

// function logRound(playerChoice,computerChoice,winner,round) { //

// }

startGame();