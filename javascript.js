let winners = [];
const choices = ["rock", "paper", "scissors"]; //game picks between these inputs

function resetGame() {
    winners = [];
    document.querySelector(".playerScore").textContent = "Score: 0";
    document.querySelector(".computerScore").textContent = "Score: 0";
    document.querySelector(".ties").textContent = "";
    document.querySelector(".winner").textContent = "";
    document.querySelector(".playerInput").textContent = "";
    document.querySelector(".computerInput").textContent = "";
    document.querySelector(".reset").style.display = "none";

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

    const winner = checkWinner(playerInput, computerInput);
    winners.push(winner);
    tallyWins();
    displayRound(playerInput, computerInput, winner);
    wins = checkWins();
    if (wins == 5) {
        displayEnd();
    }
}

function displayEnd() {
    let playerWinsNumber = winners.filter((bit) => bit == "Player").length;
    
    if (playerWinsNumber == 5) {
        document.querySelector('.winner').textContent = ('You Won 5 Games! Congratulations!');
    }
    else {
        document.querySelector('.winner').textContent = ('The Computer Won 5 Games! Better Luck Next Time!');
    }
    document.querySelector('.reset').style.display = "flex";
}


function displayRound(playerInput, computerInput, winner) {
    document.querySelector('.playerInput').textContent = `You chose: ${playerInput.charAt(0).toUpperCase() + playerInput.slice(1)}`;
    document.querySelector('.computerInput').textContent = `Computer chose: ${computerInput.charAt(0).toUpperCase() + computerInput.slice(1)}`;
    displayRoundWinner(winner);
}

function displayRoundWinner(winner) {
    if (winner == "Player") {
        document.querySelector(".winner").textContent = "You won the Round!";
    } else if (winner == "Computer") {
        document.querySelector(".winner").textContent = "The Computer won the Round!";
    } else {
        document.querySelector(".winner").textContent = "The Round was a Tie";
    }
}


function tallyWins() {
    const playerWins = winners.filter((bit) => bit == "Player").length;
    const computerWins = winners.filter((bit) => bit == "Computer").length;
    const ties = winners.filter((bit) => bit == "Tie").length;
    document.querySelector(".playerScore").textContent = `Score: ${playerWins}`;
    document.querySelector(".computerScore").textContent = `Score: ${computerWins}`;
    document.querySelector(".ties").textContent = `Ties: ${ties}`;
}

function computerSelection() {
    const choice = choices[Math.floor(Math.random()*choices.length)];

    document.querySelector(`.${choice}`).classList.add("chosen")

    setTimeout(() => {
        document.querySelector(`.${choice}`).classList.remove("chosen");
    }, 1000);

    return choice;
}

function checkWins() { // tracks the wins of player and computer
    const playerWins = winners.filter((bit) => bit == "Player").length;
    const computerWins = winners.filter((bit) => bit == "Computer").length;
    return Math.max(playerWins, computerWins);
}

function checkWinner(selection1, selection2) {
    if (
        (selection1 == "rock" && selection2 == "scissors") ||
        (selection1 == "scissors" && selection2 == "paper") ||
        (selection1 == "paper" && selection2 == "rock")
    ) {
        return "Player";
    } else if (selection1 == selection2) {
        return "Tie";
    } else {
        return "Computer";
    }
}







function logWins() {
    const playerWins = winners.filter((bit) => bit == "Player").length;
    const computerWins = winners.filter((bit) => bit == "Computer").length;
    const ties = winners.filter((bit) => bit == "Tie").length;
}
startGame();