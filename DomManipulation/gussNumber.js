"use strict";

let secretNQuery = document.querySelector(".seretNum");
let messageQuery = document.querySelector(".message");
let scoreQuery = document.querySelector("#score");
let hightSQuery = document.querySelector("#highScore");

let serectNumber = Math.trunc(Math.random() * 20) + 1;

secretNQuery.innerHTML = serectNumber;
let score = 15;
scoreQuery.innerHTML = score;
let highscore = 19;
hightSQuery.innerHTML = highscore;
document.querySelector(".CheckButton").addEventListener("click", function () {
  const entNum = Number(document.querySelector(".EntNumBox").value);
  console.log(typeof entNum, entNum);

  if (!entNum) {
    messageQuery.innerHTML = "🔎 No number";
  } else if (entNum == serectNumber) {
    messageQuery.innerHTML = "⚡️⚡️Corrct Number";
    secretNQuery.innerHTML = serectNumber;
    document.querySelector(".sectionMain").style.backgroundColor = "yellow";
    score += 7;
    if (score >= highscore) {
      highscore = score;
      hightSQuery.innerHTML = highscore + "🔥🔥";
      messageQuery.innerHTML = "🔥 🔥 High Score Congrates";
    }
    scoreQuery.innerHTML = score;
  } else if (entNum > serectNumber) {
    if (score > 0) {
      messageQuery.innerHTML = " 📈 Too high !";
      score--;
      scoreQuery.innerHTML = score;
    } else {
      messageQuery.innerHTML = " 💥 You Lost the Game";
      scoreQuery.innerHTML = 0;
    }
  } else if (entNum < serectNumber) {
    if (score > 0) {
      messageQuery.innerHTML = " 📉 Too low !";
      score--;
      scoreQuery.innerHTML = score;
    } else {
      messageQuery.innerHTML = " 💥 You Lost the Game !";
      scoreQuery.innerHTML = 0;
    }
  }
});
