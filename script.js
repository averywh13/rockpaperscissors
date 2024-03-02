let userChoice;
let compChoice;

let userScore = 0;
let compScore= 0;

//prompt to ask username
Window.onload = changeUsername();
function changeUsername(element) {
  var username = prompt("Enter your username:"); // Asks for your username
  document.getElementById("username").innerHTML = username + ":"; // Displays Username
}




//when user clicks their character image --> character cards will change
function rock() {
  //get USer choice
  userChoice = "rock";
  //display user choice
  document.getElementById("userImg").src = `imgs/${userChoice}.webp`;
  // get comp choice
  compChoice = getCompChoice();
  //display comp choice
  document.getElementById("compImg").src = `imgs/${compChoice}.webp`;
  //evaluate winners/losers
  playGame(userChoice, compChoice);
}

function paper() {
  //get user choice
  userChoice = "paper";
  //display user choice
  document.getElementById("userImg").src = `imgs/${userChoice}.webp`;
  //get comp choice
  compChoice = getCompChoice();
  //display comp choice
  document.getElementById("compImg").src = `imgs/${compChoice}.webp`;
  //evaluate winners/losers
  playGame(userChoice, compChoice);
}

function scissors() {
  //get user choice
  userChoice = "scissors";
  //display user choice
  document.getElementById("userImg").src = `imgs/${userChoice}.webp`;
  //get comp choice
  compChoice = getCompChoice();
  //display comp choice
  document.getElementById("compImg").src = `imgs/${compChoice}.webp`;
  //evaluate winners/losers
  playGame(userChoice, compChoice);
}
// ^^^^





//function to randomly generate comp choice
function getCompChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}




//outcome of characters
function playGame(userChoice, compChoice) {
  if (userChoice === compChoice) {
    outcome.textContent = "Its a tie!";
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "scissors" && compChoice === "paper") ||
    (userChoice === "paper" && compChoice === "rock")
  ) {
    outcome.textContent = `You win! Computer chose ${compChoice}.`;
  } else {
    outcome.textContent = `You lose! Computer chose ${compChoice}.`;
  }
}






//scoreboard
function playRound(userChoice) {
if (  (userChoice === 'rock' && compChoice === 'scissors') ||
      (userChoice === 'paper' && compChoice === 'rock') ||
      (userChoice === 'scissors' && compChoice === 'paper') ){
      outcomeDisplay.textContent = 'You win! Computer chose ${compChoice}.' ;
      userScore++; // if player wins, point system will increase by one
    } else {
      outcomeDisplay.textContent = 'You lose! Computer chose ${compChoice}.';
      compScore++; // if computer wins, point system will increase by one
  }

  userScoreDisplay.textContent = `Player Score: ${userScore}`; //display points for player
  compScoreDisplay.textContent = `Computer Score: ${compScore}`;b //display points for computer
}


//reset button
function reset(){
  document.getElementById("userScore").innerHTML = 0;
  document.getElementById("compScore").innerHTML = 0;
}
//when button is clicked, it will automatically set both computer and player's points to zero

