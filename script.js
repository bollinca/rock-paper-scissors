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
        resultsDiv.textContent = 'Tie. No points awarded.';
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
            switch (playerScore) {
                case 0:
                    resultsDiv.textContent = 'you lost. horribly.';
                    break;
                case 1:
                    resultsDiv.textContent = 'you lost. at least you tried.';
                    break;
                case 2:
                    resultsDiv.textContent = 'you lost. thats... two bad.';
                    break;
                case 3:
                    resultsDiv.textContent = 'you lost.';
                    break;
                case 4:
                    resultsDiv.textContent = 'you lost. close one though.';
                    break;
                default:
                    resultsDiv.textContent = 'you lost.';
            }
        } else if (playerScore > computerScore) {
            resultsDiv.textContent = 'You WON!!!';
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
resultsDiv.setAttribute('style', 'text-align: center;')

let buttons = document.querySelectorAll('button');
let rockButton = document.getElementById('rock');
let paperButton = document.getElementById('paper');
let scissorsButton = document.getElementById('scissors');

rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));