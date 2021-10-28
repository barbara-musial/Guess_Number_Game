"use strict";

let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector("#check").addEventListener("click", function () {
  const usersInput = Number(document.querySelector("#usersInput").value);
  console.log(usersInput);
  if (!usersInput) {
    document.querySelector("#hint").textContent =
      "You didn't choose any number!";
  } else if (usersInput === secretNumber) {
    document.querySelector("#hint").textContent = "You WON!";
    document.querySelector("#secretNumber").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector("#highScore").textContent = highscore;
    }
  } else if (usersInput > secretNumber) {
    if (score > 1) {
      document.querySelector("#hint").textContent = "Too high!";
      score--;
      document.querySelector("#score").textContent = score;
    } else {
      document.querySelector("#hint").textContent = "You LOST!";
      document.querySelector("#score").textContent = 0;
    }
  } else if (usersInput < secretNumber) {
    if (score > 1) {
      document.querySelector("#hint").textContent = "Too low!";
      score--;
      document.querySelector("#score").textContent = score;
    } else {
      document.querySelector("#hint").textContent = "You LOST!";
      document.querySelector("#score").textContent = 0;
    }
  }
});

document.querySelector("#again").addEventListener("click", function () {
  secretNumber = Math.floor(Math.random() * 20 + 1);
  score = 20;
  document.querySelector("#score").textContent = score;
  document.querySelector("#secretNumber").textContent = "?";
  document.querySelector("#usersInput").value = "";
  document.querySelector("#hint").textContent = "Start guessing...";
});
