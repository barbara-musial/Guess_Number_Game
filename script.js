"use strict";

let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const setTextContent = function (id, value) {
  document.querySelector(id).textContent = value;
};

document.querySelector("#check").addEventListener("click", function () {
  const usersInput = Number(document.querySelector("#usersInput").value);
  //
  if (!usersInput) {
    setTextContent("#hint", "You didn't choose any number!");
  } else if (usersInput === secretNumber) {
    setTextContent("#win", "You WON!");
    setTextContent("#hint", "Congratulations!");
    setTextContent("#secretNumber", secretNumber);
    document.querySelector("body").style.backgroundImage =
      "linear-gradient(to bottom right, rgb(133, 133, 129), #29df15)";
    if (score > highscore) {
      highscore = score;
      setTextContent("#highScore", highscore);
    }
  } else {
    if (score > 1) {
      setTextContent(
        "#hint",
        usersInput > secretNumber ? "Too high!" : "Too low!"
      );
      score--;
      setTextContent("#score", score);
    } else {
      setTextContent("#hint", "You LOST!");
      setTextContent("#score", 0);
    }
  }
});

document.querySelector("#again").addEventListener("click", function () {
  secretNumber = Math.floor(Math.random() * 20 + 1);
  score = 20;
  setTextContent("#score", score);
  setTextContent("#secretNumber", "?");
  document.querySelector("#usersInput").value = "";
  setTextContent("#hint", "Start guessing...");
  setTextContent("#win", "Guess my number!");
  document.querySelector("body").style.backgroundImage =
    "linear-gradient(to bottom right, rgb(133, 133, 129), rgb(224, 53, 53))";
});
