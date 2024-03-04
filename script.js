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
function dipper() {
  //get USer choice
  userChoice = "Dipper Pines";
  //display user choice
  document.getElementById("userImg").src = `imgs/${userChoice}.webp`;
  // get comp choice
  compChoice = getCompChoice();
  //display comp choice
  document.getElementById("compImg").src = `imgs/${compChoice}.webp`;
  //evaluate winners/losers
  playGame(userChoice, compChoice);
}

function stan() {
  //get user choice
  userChoice = "Stanford Pines";
  //display user choice
  document.getElementById("userImg").src = `imgs/${userChoice}.webp`;
  //get comp choice
  compChoice = getCompChoice();
  //display comp choice
  document.getElementById("compImg").src = `imgs/${compChoice}.webp`;
  //evaluate winners/losers
  playGame(userChoice, compChoice);
}

function bill() {
  //get user choice
  userChoice = "Bill Cipher";
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
    return "Dipper Pines";
  } else if (randomNumber === 1) {
    return "Stanford Pines";
  } else {
    return "Bill Cipher";
  }
}






function playGame(userChoice, compChoice) {
  if (userChoice === compChoice) {
    outcome.textContent = "It's a tie!";
    //when both comp and player have the same choice, print it is a tie
  } else if ((userChoice === 'Dipper Pines' && compChoice === 'Bill Cipher') ||
    (userChoice === 'Stanford Pines' && compChoice === 'Dipper Pines') ||
    (userChoice === 'Bill Cipher' && compChoice === 'Stanford Pines')) {
    outcome.textContent = "You win! Computer chose " + compChoice + "!";
    userScore++;
    roundNum++;
    //otherwise, player wins and adds a point to both round and score
  } else {
    outcome.textContent = "You lose! Computer chose " + compChoice + "!";
    compScore++;
    roundNum++;
  }
  //if something different, computer wins and adds to computer score and round
  document.getElementById('compScore').innerText = `${compScore}`;
  document.getElementById('userScore').innerText = `${userScore}`;
  document.getElementById('roundNum').innerText = `${roundNum}`;
  //print user and computer score and the round number as it changes


  // array for messages of winning the game
  const winMessages = [
    "Congratulations! You won the game!",
    "Well done! You emerged victorious!",
    "Victory is yours! Great job!"
  ];

  // array for messages of losing the game
  const loseMessages = [
    "Oh no! You lost the game!",
    "Better luck next time! You lost!",
    "Don't worry, losing is part of the game. Try again!"
  ];

  if ((roundNum >= 5) && (userScore > compScore)) {
    document.getElementById('tryMe').innerText = 'Game Over!';
    // randomly select a message from the winMessages array
    const randomIndex = Math.floor(Math.random() * winMessages.length);
    outcome.textContent = winMessages[randomIndex];
  } else if ((roundNum >= 5) && (userScore < compScore)) {
    document.getElementById('tryMe').innerText = 'Game Over!';
    // randomly select a message from the loseMessages array
    const randomIndex = Math.floor(Math.random() * loseMessages.length);
    outcome.textContent = loseMessages[randomIndex];
  }
}

//when button is hit, it will set the round number back to 1, and the players/computers scores to 0
function resetGame() {
  userScore = 0;
  compScore = 0;
  roundNum = 1;
  document.getElementById('userScore').innerText = '0';
  document.getElementById('compScore').innerText = '0';
  document.getElementById('tryMe').innerHTML = `Round <span id="roundNum">1</span>:`;
  document.getElementById('outcome').innerHTML = `Who Will Win?`;
  document.getElementById('userImg').src = 'imgs/fillerimgg.png';
  document.getElementById('compImg').src = 'imgs/fillerimgg.png';
}