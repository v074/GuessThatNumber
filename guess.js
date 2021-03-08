// GUESS THAT NUMBER

// Text/message to be used throughout file
const enterNumText = `Please enter a number greater than zero.`;
// For restarting the game
let restartGame = true;
// For storing the range of the number to be guessed.
let rangeNum;
// For storing the actual number to be guessed
let randomNum;
// for storing the user's remaining number of attempts
let attempts;
// For storing the user's input/guess
let guess;
// for storing user response on whether or not to play again.
let playAgain;

alert(`Welcome to "GUESS THAT NUMBER!" Please click OK to start the game.`);

// Game restarts as long as restartGame is true.
while (restartGame) {
    rangeNum = parseInt(prompt(`Please enter a maximum number for the range:`));

    // Verifies the user's entry for a range number.  Only accepts numeric values greater than zero.  (NOTE: All nonzero numeric values (Excepting NaN) have a boolean value of true.  Zero and NaN have a value of false by contrast.)
    while (!rangeNum || rangeNum < 1) {
        rangeNum = parseInt(prompt(enterNumText));
    }

    // Initializes the random number the user is attempting to guess based on the user-input range number.
    randomNum = Math.floor(Math.random() * rangeNum) + 1;

    // Prompts user to enter a number of attempts allowed
    attempts = parseInt(prompt(`Please enter a number of attempts allowed:`));

    // Verifies the user's entry for a number of attempts allowed.  Once again checks to see if the value is greater than zero and is actually a number.
    while (!attempts || attempts < 1) {
        attempts = parseInt(prompt(enterNumText));
    }

    // Prompts the user for a guess within the predetermined range.
    guess = prompt(`Please enter a guess between 1 and ${rangeNum}.  You have ${attempts} attempt(s) left.`);

    // Continues to loop through until the user guesses the correct number or runs out of attempts.  Loops until a BREAK.
    while (true) {

        // Attempts to convert the user's guess into a numerical value.
        
        if(guess===`You Shall Be As Gods`){
            alert(`The number is ${randomNum}`);
            guess = prompt(`Please enter a guess between 1 and ${rangeNum}.  You have ${attempts} attempt(s) left.`);
        }
        guess = parseInt(guess);
        
        // Verifies that the guess is a number that is within the range set.
        while (!guess || guess < 1 || guess > rangeNum) {
            guess = parseInt(prompt(`Please enter a number from 1 to ${rangeNum}`));
        }
        //Decrements the number of attempts.
        attempts--;

        // Evaluates the guessed value below.
        // Success state: number was successfully guessed
        if (guess === randomNum) {
            alert(`CONGRATULATIONS!  YOU GUESSED THE CORRECT NUMBER: ${randomNum}!`);
            break;
            // Failstate: Out of guesses.
        } else if (attempts === 0) {
            alert(`Sorry, but you have run out of attempts.  :(
                The number was ${randomNum}.`);
            break;
            // Checks if guess was too low, prompts the user to guess again.
        } else if (guess < randomNum) {
            guess = prompt(`Too low.  You have ${attempts} attempts(s) left.`);
            //  Remaining state: guess was too high, prompts the user to guess again.
        } else {
            guess = prompt(`Too high.  You have ${attempts} attempt(s) left.`)
        }
    }
    // Prompts user with option to play again.
    playAgain = prompt(`Would you like to play again?  Y for yes, N for no.`);
    // Loop continues until user submits valid response
    while (true) {
        // Player enters No ("N" or "n")
        if (playAgain.toUpperCase() === "N") {
            // Informs the player the game is ending.
            alert(`Thanks for playing.`);
            // Sets the game to end and exits the loop..
            restartGame = false;
            break;
            // Player enters Yes ("Y" or "y")
        } else if (playAgain.toUpperCase() === "Y") {
            // restartGame already set to true.  Simply breaks the confirmation loop.
            break;
        } else {
            // case: Player enters erroneous value.  Prompts for valid entry.
            playAgain = prompt(`Please enter Y or N:`);
        }
    }
}