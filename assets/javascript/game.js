//Generic replace at index method for strings
String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

//wordGuess game object
var wordGuess = {

    winCount: 0,
    lossCount: 0,
    wordLibrary: [
        'mariah carey', 'janet jackson', 'boyz ii men',
        'celine dion', 'whitney houston', 'madonna', 'tlc'
    ],
    guessLimit: 12,
    guessCount: 0,
    wordDisplay: '',
    wordTarget: '',
    usedLetters: [],
    matchedLetter: false,

    //initalize consumed variables for game
    init: function () {
        wordGuess.guessCount = 0;
        wordGuess.wordTarget = '';
        do {  //avoid getting the same word twice in a row
            wordGuess.wordTarget = wordGuess.wordLibrary[
                Math.floor(Math.random() * wordGuess.wordLibrary.length)
            ];
        } while (wordGuess.wordTarget === wordGuess.wordDisplay);
        wordGuess.wordDisplay = '';
        wordGuess.usedLetters = [];

        for (i = 0; i < wordGuess.wordTarget.length; i++) {
            if (wordGuess.wordTarget.charAt(i) == ' ') {
                wordGuess.wordDisplay += ' ';
            } else {
                wordGuess.wordDisplay += '_';
            }
        }
    },

    //bounds input response to a to z, length restraint prevents tab/fkeys
    verifyGuess: function (inputGuess) {
        if (inputGuess >= 'a' && inputGuess <= 'z' && inputGuess.length == 1) {
            return 1;
        } else {
            return 0;
        }
    },

    //checks for win and loss conditions, resets game
    verifyWin: function () {

        if (wordGuess.guessCount >= wordGuess.guessLimit) {
            wordGuess.lossCount++;
            $('#infoZone').html('You lose!<br>Win Count : '
                + wordGuess.winCount + '<br>Loss Count: '
                + wordGuess.lossCount);
            wordGuess.init();
        } else if (wordGuess.wordTarget === wordGuess.wordDisplay) {
            {
                wordGuess.winCount++;
                $('#infoZone').html('You win!<br>Win Count : '
                    + wordGuess.winCount + '<br>Loss Count: '
                    + wordGuess.lossCount);
                wordGuess.init();
            }
        }
    },

    //checks if userGuess matches 
    checkGuess: function (userGuess) {
        if (wordGuess.verifyGuess(userGuess)) {
            wordGuess.matchedLetter = false; //reset match state
            for (i = 0; i < wordGuess.wordTarget.length; i++) {
                if (userGuess === wordGuess.wordTarget.charAt(i)) {
                    wordGuess.wordDisplay = wordGuess.wordDisplay.replaceAt(i, userGuess);
                    wordGuess.matchedLetter = true;
                }
            }
            //avoided if guess letter matched target or is already in usedLetters
            if (!wordGuess.matchedLetter && !wordGuess.usedLetters.includes(userGuess)) {
                wordGuess.guessCount++;
                wordGuess.usedLetters += userGuess;
            }
        }
    },

    //sends display information to game div
    updateDisplay: function () {
        $('#gameZone').html('Guess the word: ' + wordGuess.displayWordDisplay()
            //+ '<br>Current Target: ' + wordGuess.wordTarget
        );
        $('#letterZone').html('Guesses Remaining: ' +
            (parseInt(wordGuess.guessLimit) - parseInt(wordGuess.guessCount))
            + '<br>Letters used: ' + wordGuess.displayLetters())
    },

    //formatting to display lettersUsed
    displayLetters: function () {
        var returnString = '[ ';
        for (i = 0; i < wordGuess.usedLetters.length; i++) {
            if (i == 0) {
                returnString += wordGuess.usedLetters.charAt(i).toUpperCase();
            } else {
                returnString += (', ' + wordGuess.usedLetters.charAt(i).toUpperCase());
            }
        }
        returnString += ' ]';
        return returnString;
    },

    //formatting to display wordDisplay
    displayWordDisplay: function () {
        var returnString = '[ ';
        for (i = 0; i < wordGuess.wordDisplay.length; i++) {
            if (wordGuess.wordTarget.charAt(i) == ' ') {
                returnString += '&emsp;';
            } else {
                returnString += (wordGuess.wordDisplay.charAt(i).toUpperCase() + ' ');
            }
        }
        returnString += ' ]';
        return returnString;
    },

    //methods gathered to run the game
    runGame: function (userGuess) {
        wordGuess.checkGuess(userGuess);
        wordGuess.verifyWin();
        wordGuess.updateDisplay();
    }
}

//First run init to pick word and display
wordGuess.init();
wordGuess.updateDisplay();
//keypres loop for input
document.onkeyup = function (event) {
    var userGuess = (event.key).toLowerCase();

    wordGuess.runGame(userGuess);
}

//Select a word randomly from a dictionary? Specify length or other properties?
//Example appeared to prune to bands or certain topics in a hardcoded library

/*
    Press Any Key to Get Started!

    Wins: 0

    Word:   - - - - - - -

    Number of Guesses Remaining: 20

    Letters Already Guessed: 0 [ - - - - - - - etc]
*/



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