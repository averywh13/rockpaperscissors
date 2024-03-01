let userChoice;
let compChoice;

let userScore;
let compScore;

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
  userChoice = "paper";

  document.getElementById("userImg").src = `imgs/${userChoice}.webp`;
  compChoice = getCompChoice();
  document.getElementById("compImg").src = `imgs/${compChoice}.webp`;

  playGame(userChoice, compChoice);
}

function scissors() {
  userChoice = "scissors";

  document.getElementById("userImg").src = `imgs/${userChoice}.webp`;
  compChoice = getCompChoice();
  document.getElementById("compImg").src = `imgs/${compChoice}.webp`;
  playGame(userChoice, compChoice);
}
// ^^^^

//function to randomly generate Comp Choice
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
    return "This game is a tie!";
  }
  if (userChoice === "rock") {
    if (compChoice == "paper") {
      return "Sorry, computer won!";
    } else {
      return "Congratulations, you won!";
    }
  }
  if (userChoice === 'paper') {
    if (compChoice == 'scissors') {
      return "Sorry, computer won!";
    }else {
      return "Congratulations, you won!";
      }
    }
}
