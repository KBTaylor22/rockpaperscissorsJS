function playRound(playerSelection, computerSelection) {
  // your code here to determine whether playerSelection or computerSelection wins!
  if (playerSelection === computerSelection) {
    console.log('Tie');
  } else if (playerSelection === 'rock' && computerSelection === scissors) { 
    console.log(`You chose ${playerSelection}. They chose ${computerSelection}. You win.`);
  } else if (playerSelection === 'paper' && computerSelection === rock) { 
    console.log(`You chose ${playerSelection}. They chose ${computerSelection}. You win.`);
  } else if (playerSelection === 'scissors' && computerSelection === paper) { 
    console.log(`You chose ${playerSelection}. They chose ${computerSelection}. You win.`);
  } else {
    console.log(`You chose ${playerSelection}. They chose ${computerSelection}. You loose.`);
}

function getComputerChoice() {
  switch (Math.floor(Math.random() * 3 )){
  case 0:
      return 'rock'
  case 1:
      return 'paper'
  case 2:
      return 'rock'
  }
}


const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
