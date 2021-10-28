"use strict";

let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
console.log(secretNumber);

document.querySelector("#check").addEventListener("click", function () {
  const usersInput = Number(document.querySelector("#usersInput").value);
  console.log(usersInput);
  if (!usersInput) {
    document.querySelector("#hint").textContent =
      "You didn't choose any number!";
  } else if (usersInput === secretNumber) {
    document.querySelector("#hint").textContent = "You WON!";
  } else if (usersInput > secretNumber) {
    document.querySelector("#hint").textContent = "Too high!";
    score--;
    document.querySelector("#score").textContent = score;
  } else if (usersInput < secretNumber) {
    document.querySelector("#hint").textContent = "Too low!";
    score--;
    document.querySelector("#score").textContent = score;
  }
});
