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

function displayLossMessage(playerScore) {
    let lossMessage;
    switch (playerScore) {
        case 0:
            lossMessage = 'You lost. Horribly.';
            break;
        case 1:
            lossMessage = 'You lost. At least you tried.';
            break;
        case 2:
            lossMessage = 'You lost. That\'s... two bad.';
            break;
        case 3:
            lossMessage = 'You lost.';
            break;
        case 4:
            lossMessage = 'You lost. Close one though.';
            break;
    }
    resultsDiv.textContent = lossMessage;
}

function displayWinMessage(computerScore) {
    let winMessage;
    switch (computerScore) {
        case 0:
            winMessage = 'You won with a perfect score!!!'
            break;
        case 1:
            winMessage = 'You won a nearly flawless victory!'
            break;
        case 2:
            winMessage = 'You won by quite a bit!'
            break;
        case 3:
            winMessage = 'You won!'
            break;
        case 4:
            winMessage = 'You won a hard fought victory!'
            break;
    }
    resultsDiv.textContent = winMessage;
}

function playAndDisplayMatch(computerChoice, playerChoice) {
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
}

function playBestOfFiveRound(playerChoice) {
    // compare to computer
    let computerChoice = computerPlay();
    if (computerScore === 0 && playerScore === 0) {
        playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    }
    playAndDisplayMatch(computerChoice, playerChoice);
    if (computerScore === 5 || playerScore === 5) {
        if (computerScore > playerScore) {
            displayLossMessage(playerScore);
        } else if (playerScore > computerScore) {
            displayWinMessage(computerScore);
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

rockButton.addEventListener('click', () => playBestOfFiveRound('rock'));
paperButton.addEventListener('click', () => playBestOfFiveRound('paper'));
scissorsButton.addEventListener('click', () => playBestOfFiveRound('scissors'));