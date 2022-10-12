'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
let luckyNum = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

const guessInput = document.querySelector('.guess');
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
const scoreTag = document.querySelector('.score');

let score = 20;

document.querySelector('.check').addEventListener('click', () => {
  const guessNum = Number(guessInput.value);
  if (!guessNum) {
    resultTest.textContent = 'No Number ...';
  } else if (guessNum === luckyNum) {
    displayMessage('Correct Number 🏆...');
    document.querySelector('body').style.background = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = luckyNum;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guessNum !== luckyNum) {
    if (score > 0) {
      displayMessage(
        guessNum > luckyNum
          ? 'The number is High ...'
          : 'This number is low ...'
      );
      score--;
      scoreTag.textContent = score;
    } else {
      displayMessage('You Lose The Game ...');
    }
  }
});
document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('body').style.background = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  score = 20;
  scoreTag.textContent = score;
  guessInput.value = '';
  luckyNum = Math.trunc(Math.random() * 2) + 1;
});
