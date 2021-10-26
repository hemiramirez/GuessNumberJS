'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='✔ Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value);

//definiing the secret number

// let secretNumber = Math.trunc(Math.random() * 20) + 1;

// let score = 20;
// let highscore = 0;

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   if (!guess && score > 0) {
//     document.querySelector('.message').textContent = '⛔ No Number!';
//     score--;
//     document.querySelector('.score').textContent = score;

//     //when player wins
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = '🎉 Correct Number!';
//     document.querySelector('.number').textContent = secretNumber;
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     document.querySelector('.number').style.fontSize = '8rem';
//     document.querySelector('.h1').textContent = 'You have guessed it !!!!';
//     document.querySelector('.h1').style.fontSize = '8rem';
//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }

//     // when player is too high
//   } else if (guess > secretNumber && score > 0) {
//     document.querySelector('.message').textContent = ' ⬆ Too high!';
//     score--;
//     document.querySelector('.score').textContent = score;

//     // when player is too low
//   } else if (guess < secretNumber && score > 0) {
//     document.querySelector('.message').textContent = ' ⬇ Too low!';
//     score--;
//     document.querySelector('.score').textContent = score;

//     // when player has lost the game
//   } else {
//     document.querySelector('.message').textContent = ' ❌ You lost!';
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector('.message').textContent = 'Start guessing ...';
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });

// ELIMINATING DUPLICATES - DRY CODE - REFACTORING

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess && score > 0) {
    displayMessage('⛔ No Number!');
    score--;
    document.querySelector('.score').textContent = score;

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '40rem';
    document.querySelector('.number').style.color = '#fff';
    document.querySelector('.number').style.fontSize = '9rem';
    document.querySelector('.h1').textContent = 'You have guessed it !!!!';
    document.querySelector('.h1').style.fontSize = '4rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when player is too high
  } else if (guess !== secretNumber && score > 0) {
    displayMessage(guess > secretNumber ? ' ⬆ Too high!' : '⬇ Too low!');
    score--;
    document.querySelector('.score').textContent = score;
    // when player has lost the game
  } else {
    displayMessage(' ❌ You lost!');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = 'rgb(208, 234, 245)';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.h1').textContent = 'Guess the Number!';
});
