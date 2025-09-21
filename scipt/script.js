const buttons = document.querySelectorAll("button");
const roundResult = document.getElementById("round-result");
const scoreDisplay = document.getElementById("score");
const winnerDisplay = document.getElementById("winner");

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }

  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  if (computerSelection === winConditions[playerSelection]) {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

function updateScore() {
  scoreDisplay.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function checkWinner() {
  if (playerScore === 5) {
    winnerDisplay.textContent = "🎉 You won the game!";
    disableButtons();
  } else if (computerScore === 5) {
    winnerDisplay.textContent = "💻 The computer wins the game.";
    disableButtons();
  }
}

function disableButtons() {
  buttons.forEach(button => button.disabled = true);
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerSelection = button.id;
    const computerSelection = computerPlay();
    const resultText = playRound(playerSelection, computerSelection);

    roundResult.textContent = resultText;
    updateScore();
    checkWinner();
  });
});
