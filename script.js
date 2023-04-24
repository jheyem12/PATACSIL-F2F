const choices = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const result = playRound(playerChoice, computerChoice);
        updateScore(result);
        updateMessage(result, playerChoice, computerChoice);
    });
});

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "tie";
    } else if (playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "paper" && computerChoice === "rock" ||
        playerChoice === "scissors" && computerChoice === "paper") {
        return "win";
    } else {
        return "lose";
    }
}

function updateScore(result) {
    const playerScoreText = document.querySelector("#player-score");
    const computerScoreText = document.querySelector("#computer-score");

    if (result === "win") {
        playerScore++;
    } else if (result === "lose") {
        computerScore++;
    }

    playerScoreText.textContent = `Player: ${playerScore}`;
    computerScoreText.textContent = `Computer: ${computerScore}`;
}

function updateMessage(result, playerChoice, computerChoice) {
    const message = document.querySelector("#message");

    if (result === "win") {
        message.textContent = `${playerChoice} beats ${computerChoice}. You win!`;
    } else if (result === "lose") {
        message.textContent = `${computerChoice} beats ${playerChoice}. You lose!`;
    } else {
        message.textContent = `It's a tie! You both chose ${playerChoice}.`;
    }
}

const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;

    const playerScoreText = document.querySelector("#player-score");
    const computerScoreText = document.querySelector("#computer-score");
    const message = document.querySelector("#message");

    playerScoreText.textContent = `Player: ${playerScore}`;
    computerScoreText.textContent = `Computer: ${computerScore}`;
    message.textContent = "Make your choice!";
});
