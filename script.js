'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

//random number generator
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//REFACTORING the function document.queryselector
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// setting value of number class or question mark icon to the random number
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);
  //When there is no input
  if (!guess) {
    displayMessage('No Number!');
    // document.querySelector('.message').textContent = 'No number!';

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too High!' : 'Too Low!';
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      // document.querySelector('.message').textContent = 'You Lose!';
      displayMessage('You Lose!');
    }
  }
  // //When players guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.message').textContent = 'You Lose!';
  //   }

  //   //When players guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('.message').textContent = 'You Lose!';
  //   }
  // }
});

//Coding challenge #1
//implementing the Again button function
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';

  // document.querySelector('.message').textContent = 'Start guessing...';

  displayMessage('Start guessing...');

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.guess').value = '';
});
