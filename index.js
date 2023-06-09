let chances = 3;
let playerScore = 0;
let computerScore = 0;
let confettiTimeout;

function playGame(playerChoice) {
  if (chances === 0) {
    document.getElementById("result").innerHTML = "Game over! Do you want to play again? (y/n)";
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
    return;
  }

  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let result = "";

  result += "Player choice: " + playerChoice + "<br>Computer choice: " + computerChoice + "<br>";

  if (playerChoice === computerChoice) {
    result += "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result += "You win!";
    playerScore++;
  } else {
    result += "Computer wins!";
    computerScore++;
  }

  chances--;

  document.getElementById("result").innerHTML = result;
  document.getElementById("score").innerHTML = "Player: " + playerScore + " | Computer: " + computerScore;

  if (chances === 0) {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;

    if (playerScore > 0) {
      celebrate();
    }
  }
}

function playAgain(choice) {
  if (choice === "y") {
    chances = 3;
    playerScore = 0;
    computerScore = 0;
    document.getElementById("result").innerHTML = "";
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
    document.getElementById("score").innerHTML = "Player: " + playerScore + " | Computer: " + computerScore;

    // Clear confetti
    clearTimeout(confettiTimeout);
    const confettiContainer = document.getElementById("confetti-container");
    confettiContainer.innerHTML = "";
  } else if (choice === "n") {
    document.getElementById("result").innerHTML = "Game over!";
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
  }
}

function celebrate() {
  const confettiContainer = document.getElementById("confetti-container");
  confettiContainer.innerHTML = "";

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confettiContainer.appendChild(confetti);
  }

  confettiContainer.classList.add("active");

  confettiTimeout = setTimeout(() => {
    confettiContainer.classList.remove("active");
  }, 3000);
}
