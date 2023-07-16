"use strict";

const number = document.querySelector(".number");
const reloadPage = document.querySelector(".again");
const checkBtn = document.querySelector(".check");
const inputNum = document.querySelector(".guess");
const body = document.querySelector("body");
const score = document.querySelector(".score");
const message = document.querySelector(".message");
const highscore = document.querySelector(".highscore");

// создание секретного числа от 1 до 20
let randomNumber = Math.trunc(Math.random() * 20) + 1;

let getScore = 20;
let getHighscore = 0;

function messages(text) {
  message.textContent = text;
}
// получаем число инпута
checkBtn.addEventListener("click", () => {
  let value = parseInt(inputNum.value);
  if (!value) {
    messages("Please enter a number");
  } else if (value === randomNumber) {
    messages("WIN!!!🏆");
    body.style.background = "#60b347";
    number.textContent = value;
    if (getScore > getHighscore) {
      getHighscore = getScore;
      highscore.textContent = getHighscore;
    }
  } else if (value !== randomNumber) {
    if (getScore > 1) {
      if (value > randomNumber) {
        messages("Your number is greater");
        getScore--;
        score.textContent = getScore;
      } else if (value < randomNumber) {
        messages("Your number is smaller");
        getScore--;
        score.textContent = getScore;
      }
    } else {
      messages("You lose:(");
      score.textContent = 0;
    }
  }
});
// обновление игры
reloadPage.addEventListener("click", () => {  
  getScore = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  messages("Начните угадывать...");
  score.textContent = getScore;
  inputNum.value = "";
  number.textContent = "?"
  body.style.background =
    "radial-gradient(circle, rgba(35, 34, 41, 1) 51%, rgba(56, 59, 60, 1) 100%)";
});
// очищаем инпут при фокусе
inputNum.addEventListener("focus", function () {
  inputNum.value = "";
});
