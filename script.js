function computerPlay() {
// 0 = rock, 1 = paper 2 = scissors
    let randomNumber = Math.floor(Math.random() * Math.floor(3));
    let computerChoice;
    switch (randomNumber) {
        case 0:
        return computerChoice = 'rock';
        case 1:
        return computerChoice = 'paper';
        case 2: 
        return computerChoice = 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
// prompt player for their choice (case insensitive) 
    let playerChoice = prompt('Choose your weapon: Rock, Paper, or Scissors?');
    //convert playerchoice to lowercase (makes input case insensitive);
    playerChoice = playerChoice.toLowerCase();
// compare to computer
    let computerChoice = computerPlay();
    if (computerChoice == playerChoice) {
        return 'Tie! Time for a rematch!'
    } else if (computerChoice == 'rock' && playerChoice == 'scissors'
            || computerChoice == 'paper' && playerChoice == 'rock' 
            || computerChoice == 'scissors' && playerChoice == 'paper') {
            return 'You Lose!';
    } else if (playerChoice == 'rock' && computerChoice == 'scissors'
            || playerChoice == 'paper' && computerChoice == 'rock' 
            || playerChoice == 'scissors' && computerChoice == 'paper') {
        return 'You Win!';
    } else {
        return 'Unacceptable. Please pick rock, paper, or scissors (case does not matter.)';
    }
}