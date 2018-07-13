var winCount = 0;
var guessLibrary = ['target1', 'target2']; //hardcoded library
var targetIndex = 0; //maybe change to initialize as random 0 .. guessLibrary.length-1;
const guessLimit = 12;
var lettersGuessed = 0;
var guessTarget = [];

for (i = 0; i < guessLibrary[targetIndex].length - 1; i++) {
    guessTarget[i] = '-'; //Initialize guessTarget
}

//while forever listening for events.... do stuff on press

//learn how this event actually works!
var x = event.which || event.keyCode;   // Get the Unicode value
var y = String.fromCharCode(x);         // Convert the value into a character

//Game loop's already live on page load in example
//Select a word randomly from a dictionary? Specify length or other properties?
//math.rand and check for no repeats when selecting new word?
//Example appeared to prune to bands or certain topics in a hardcoded library

//initialize variables:
//  need winCount, guessLibrary, targetIndex?, const guessLimit, lettersGuessed
//      
//  actually could just generate display string based on hardcoded library index
//Decide some kind of guess limit like hangman, deducted by miss count?
//based on word make a guessArray of string, make new string of - to length

//Need to display guessLimit, displayArray, etc to game board
//Basic Board Example:
/*
    Press Any Key to Get Started!

    Wins: 0

    Word:   - - - - - - -

    Number of Guesses Remaining: 20

    Letters Already Guessed: 0 [ - - - - - - - etc]
*/

//check for equality after each guess loop, that's win condition?
//increment guess count each keypress

//if guess match item in guessArray copy same index to displayArray
//Else copy guess value to guessed letter string increment missCount

//on loss reloop to a new game round, no title?
//Need to reinitialize values other than win count etc?

//use key events

/*
## Option Two: Word Guess Game (Challenge - Recommended)

1. [Watch the demo](hangman-game-demo.mov).

2. Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!

3. Use key events to listen for the letters that your players will type.

4. Display the following on the page:

5. Press any key to get started!

6. Wins: (# of times user guessed the word correctly).

   * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.

   * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.

7. Number of Guesses Remaining: (# of guesses remaining for the user).

8. Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

9. After the user wins/loses the game should automatically choose another word and make the user play it.

##### Word Guess Game Bonuses

1. Play a sound or song when the user guesses their word correctly, like in our demo.
2. Write some stylish CSS rules to make a design that fits your game's theme.
3. **HARD MODE:** Organize your game code as an object, except for the key events to get the letter guessed. This will be a challenge if you haven't coded with JavaScript before, but we encourage anyone already familiar with the language to try this out.
4. Save your whole game and its properties in an object.
5. Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.
6. Don't forget to place your global variables and functions above your object.
   * Remember: global variables, then objects, then calls.
7. Definitely talk with a TA or your instructor if you get tripped up during this challenge.
*/