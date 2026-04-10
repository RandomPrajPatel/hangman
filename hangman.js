const POSSIBLE_WORDS = ["obdurate", "verisimlitude", "defenestrate", "obsquious",
    "dissonant", "toady", "idempotent"];

var word = "";
var guesses = ""; // this will be all the guesses 
var guessCount;
const MAX_GUESSES = 6;

let newGame = function () {
    guessCount = MAX_GUESSES;
    let randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    guesses = "";
    updatePage();
}
let updatePage = function () {
    let clueString = "";
    for (let i = 0; i < word.length; i++) {
        var currentLetter = word.charAt(i);
        if (guesses.indexOf(currentLetter) >= 0) {
            clueString += currentLetter + "";
        }
        else {
            clueString += "_ ";
        }
    }
    let clue = document.getElementById("clue");
    clue.textContent = clueString;

    let guessArea = document.getElementById("guesses");
    guessArea.textContent = "Guesses: " + guesses;

    let image = document.getElementById("hangmanpic");
    image.src = `images/hangman${guessCount}.gif`;


    if (clueString.indexOf("_") < 0 && word != "") {
        guessArea.textContent = guessArea.textContent + " - You Win!";
    }

    if (guessCount == 0) {
        guessArea.textContent = guessArea.textContent + " - You Lose!";
    }
}
let guessLetter = function () {

    if (word == "") {
        return;
    }
    if (guessCount == 0) {
        return;
    }
    let input = document.getElementById("guess");
    let letter = input.value;
    letter = letter.toLowerCase();

    if (guesses.indexOf(letter) >= 0) {
        return;
    }

    if (word.indexOf(letter) < 0) {
        guessCount--;
    }

    
    guesses += letter;
    input.value = ""; // Guess box is cleared after every guess 

    updatePage();

}
