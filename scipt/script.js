function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
function getHumanChoice() {
    let userInput = prompt("Choose rock, paper, or scissors:");
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    } else {
        alert("Invalid choice. Please choose rock, paper, or scissors.");
        return getHumanChoice();
    }
}
console.log("Welcome to Rock, Paper, Scissors!");
let computerScore = 0;
let humanScore = 0;
for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}:`);
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    console.log(`Computer chose: ${computerChoice}`);
    console.log(`You chose: ${humanChoice}`);
    if (computerChoice === humanChoice) {
        console.log("It's a tie!");
    } else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        console.log("Computer wins this round!");
        computerScore++;
    } else {
        console.log("You win this round!");
        humanScore++;
    }
    console.log(`Score - Computer: ${computerScore}, You: ${humanScore}`);
}
if (computerScore > humanScore) {
    console.log("Computer wins the game!");
} else if (humanScore > computerScore) {
    console.log("You win the game!");
} else {
    console.log("The game is a tie!");
}