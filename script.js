let userChoice;
let compChoice;
let userScore = 0;
let compScore = 0;
let roundNum = 1;


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





function playGame(userChoice, compChoice) {
  if (userChoice === compChoice) {
    outcome.textContent = "It's a tie!";
  } else if ((userChoice === 'rock' && compChoice === 'scissors') ||
    (userChoice === 'paper' && compChoice === 'rock') ||
    (userChoice === 'scissors' && compChoice === 'paper')) {
    outcome.textContent = "You win!" + ${compChoice};
    userScore++;
    roundNum++;
  } else {
    outcome.textContent = "You lose!";
    compScore++;
    roundNum++;
  }
  document.getElementById('compScore').innerText = `${compScore}`;
  document.getElementById('userScore').innerText = `${userScore}`;
  document.getElementById('roundNum').innerText = `${roundNum}`;


// when the round number is greater than 5 and the user's score is greater than the computer's, you will win the game
  if ((roundNum >= 5)(userScore > compScore)) {
    document.getElementById('tryMe').innerText = 'Game over!';
    outcome.textContent = "Congratulations! You won the game!";
  } else if ((roundNum >= 5)(userScore < compScore)) {
    document.getElementById('tryMe').innerText = 'Game over!';
    outcome.textContent = "Sorry! You have lost the game!";
  }
}
  function resetGame() {
    userScore = 0;
    compScore = 0;
    roundNum = 1;
    document.getElementById('userScore').innerText = '0';
    document.getElementById('compScore').innerText = '0';
    document.getElementById('tryMe').innerHTML = `Round <span id="roundNum">1</span>:`;
    document.getElementById('outcome').innerHTML = 'd-none';
  }