Window.onload = changeUsername();

function changeUsername(element) {
  var username = prompt("Enter your username:"); // Asks for your username
  document.getElementById("username").innerHTML = username + ':'; // Displays Username
}

function rock() {
  document.getElementById('rockimg').src = "imgs/dipper.webp";
  console.log(rock());
}

function paper() {
  document.getElementById('rockimg').src = "imgs/newstanford.webp";
  console.log(paper());
}

function scissors() {
  document.getElementById('rockimg').src = "imgs/newbill.webp";
  console.log(scissors());
}
