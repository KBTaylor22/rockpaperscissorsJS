function playRound(playerSelection, computerSelection) {
  // your code here to determine whether playerSelection or computerSelection wins!
  if (playerSelection === computerSelection) {
    prompt('Tie');
  } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {   
    prompt(`You chose ${playerSelection}. They chose ${computerSelection}. You win.`);
    playerScore++;
} else if (playerSelection === 'paper' && computerSelection === 'rock') { 
    prompt(`You chose ${playerSelection}. They chose ${computerSelection}. You win.`);
    playerScore++;
} else if (playerSelection === 'scissors' && computerSelection === 'paper') { 
    prompt(`You chose ${playerSelection}. They chose ${computerSelection}. You win.`);
    playerScore++;
} else {
    prompt(`You chose ${playerSelection}. They chose ${computerSelection}. You loose.`);
    computerScore++;
}
}

function getComputerChoice() {
  switch (Math.floor(Math.random() * 3 )){
  case 0:
      return 'rock'
  case 1:
      return 'paper'
  case 2:
      return 'scissors'
  }
}

let playerSelection = prompt('Rock, Paper, Scissors. Pick one:')

let computerScore = 0
let playerScore = 0

const computerSelection = getComputerChoice();
