function playRound(playerSelection, computerSelection) {
  // your code here to determine whether playerSelection or computerSelection wins!
  if (playerSelection === computerSelection) {
    alert('Tie');
    return 0
  } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {   
    alert(`You chose ${playerSelection}. They chose ${computerSelection}. You win.`);
    return 1
} else if (playerSelection === 'paper' && computerSelection === 'rock') { 
    alert(`You chose ${playerSelection}. They chose ${computerSelection}. You win.`);
    return 1
} else if (playerSelection === 'scissors' && computerSelection === 'paper') { 
    alert(`You chose ${playerSelection}. They chose ${computerSelection}. You win.`);
    return 1
} else {
    alert(`You chose ${playerSelection}. They chose ${computerSelection}. You loose.`);
    return 2
}
}

function getComputerChoice() {
  switch (Math.floor(Math.random() * 3 )){
  case 0:
      return 'rock';
  case 1:
      return 'paper';
  case 2:
      return 'scissors';
  }
}

function game(){
  playerScore = 0;
  computerScore = 0;
  
  for (let i = 0; i < 3; i++) {
    let playerSelection = prompt('Rock, Paper, Scissors. Pick one:')
    const computerSelection = getComputerChoice();
    let score = playRound(playerSelection, computerSelection);  
    if (score == 2) {
      computerScore++;
    } else if (score == 1) {
      playerScore++;
    }
}
}

function winner() {
  if (playerScore > computerScore) {
    alert(`You win!`);
  } else if (playerScore < computerScore) {
    alert(`Sorry, you loose!`);
  } else if (playerScore == computerScore) {
    alert('Tie!');
  }
}

game();
winner();
