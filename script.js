function computerPlay() {
    // 0 = rock, 1 = paper 2 = scissors
    let randomNumber = Math.floor(Math.random() * Math.floor(3));
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(playerChoice) {
    // compare to computer
    let computerChoice = computerPlay();
    if (computerScore === 0 && playerScore === 0)
        playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    if (computerChoice == playerChoice) {
        resultsDiv.textContent = 'Tie! Time for a rematch!';
    } else if (computerChoice == 'rock' && playerChoice == 'scissors'
        || computerChoice == 'paper' && playerChoice == 'rock'
        || computerChoice == 'scissors' && playerChoice == 'paper') {
        computerScore++;
        resultsDiv.textContent = 'Computer +1 point.';
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    } else if (playerChoice == 'rock' && computerChoice == 'scissors'
        || playerChoice == 'paper' && computerChoice == 'rock'
        || playerChoice == 'scissors' && computerChoice == 'paper') {
        playerScore++;
        resultsDiv.textContent = 'Player +1 point.';
        playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    }
    if (computerScore === 5 || playerScore === 5) {
        if (computerScore > playerScore) {
            resultsDiv.textContent = 'you lost.';
        } else if (playerScore > computerScore) {
            resultsDiv.textContent = 'You WIN!!!';
        }
        computerScore = 0;
        playerScore = 0;
    }
}
//score keeping variables
let playerScore = 0;
let computerScore = 0;

//DOM manipulation
let scoreDisplay = document.getElementById('score');
let playerScoreDisplay = document.getElementById('player-score');
let computerScoreDisplay = document.getElementById('computer-score');
let resultsDiv = document.getElementById('results');

let rockButton = document.getElementById('rock');
let paperButton = document.getElementById('paper');
let scissorsButton = document.getElementById('scissors');

rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));




function keepScore() {
    // play a 5 round game, keep score, report winner.
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; i++) {
        let result = playRound();
        if (result == "You Win!") {
            playerScore++;
            console.log("Computer: You win this round...");
        } else if (result == "You Lose!") {
            computerScore++;
            console.log("Computer: That's a point for me!");
        } else {
            i--;
            console.log("Computer: Tie! Let's re-do that round.");
        }
        console.log(`Current score report: Computer: ${computerScore} points Player: ${playerScore} points.`);
    }
    if (playerScore > computerScore) {
        return "You Win!"
    } else if (computerScore > playerScore) {
        return "You Lose.";
    } else {
        return "Some sort of bug has occurred."
    }
}