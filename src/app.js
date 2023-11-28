/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".card").innerHTML = generateRandomNum();
};

// let button = document.querySelector("#button");
// button.addEventListener("click", () => {
//   document.querySelector(".card").classList.add(generateRandomSuit());
//   document.querySelector(".card").innerHTML = generateRandomNum();
// });
let generateRandomNum = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};
let generateRandomSuit = () => {
  let suit = ["diamond", "spade", "heart", "club"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};
