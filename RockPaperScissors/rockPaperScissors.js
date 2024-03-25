console.log("Let's play a GAME!");

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' 
  || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
console.log("Error : Invalid Choice");
  }
};

const getComputerChoice = () => {
 let randomNumber = Math.floor(Math.random() * 3);
 
 switch (randomNumber) {
   case 0:
   return 'rock';
   break;
   case 1:
   return 'paper';
   break;
   case 2:
   return 'scissors';
   break;
 }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a tie! Play again!";
  } 
  
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return "Sorry, the computer won this round.";
    } else {
      return 'Congratulations! You win!';
    };
  }
   if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return "Sorry, the computer won this round.";
    } else {
      return 'Congratulations! You win!';
    };
  } 
   if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return "Sorry, the computer won this round.";
    } else {
      return "Congratulations! You won!";
    };
  }
  if (userChoice === 'bomb') {
    return "BOOM! You win, you little cheat!";
  }
};

const playGame = () => {
const  userChoice = getUserChoice('bomb');
const computerChoice = getComputerChoice();
console.log('You threw: ' + userChoice);
console.log('The computer threw: ' + computerChoice);
console.log(determineWinner(userChoice, computerChoice));
};

playGame();
