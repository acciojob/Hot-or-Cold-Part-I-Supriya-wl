//your code here
// generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

// initialize previous guess as null
let previousGuess = null;

// get DOM elements
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const response = document.getElementById('response');

// add event listener to guess button
guessButton.addEventListener('click', function() {
  // get user's guess
  const guess = Number(guessInput.value);

  // validate user's guess
  if (guess < 1 || guess > 100 || isNaN(guess)) {
    response.textContent = 'Please enter a valid number between 1 and 100.';
    return;
  }

  // compare user's guess to secret number
  if (guess === secretNumber) {
    response.textContent = 'Congratulations! You guessed the number.';
  } else {
    // calculate the difference between the user's guess and the secret number
    const difference = Math.abs(guess - secretNumber);

    // calculate the difference between the user's guess and the previous guess
    let previousDifference = null;
    if (previousGuess !== null) {
      previousDifference = Math.abs(guess - previousGuess);
    }

    // update previous guess
    previousGuess = guess;

    // determine if the guess is hotter or colder than the previous guess
    let hotterOrColder = '';
    if (previousDifference !== null && difference < previousDifference) {
      hotterOrColder = 'Getting hotter... ';
    } else if (previousDifference !== null && difference > previousDifference) {
      hotterOrColder = 'Getting colder... ';
    }

    // determine if the user should guess higher or lower than their previous guess
    let higherOrLower = '';
    if (guess < secretNumber) {
      higherOrLower = 'Guess higher.';
    } else {
      higherOrLower = 'Guess lower.';
    }

    // display response
    response.textContent = `${hotterOrColder}${higherOrLower}`;
  }
});

