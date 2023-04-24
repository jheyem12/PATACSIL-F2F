// Array of words to choose from
const words = ["javascript", "html", "css", "jquery", "react"];

// Choose a random word from the array
let word = words[Math.floor(Math.random() * words.length)];

// Array to hold the letters guessed by the user
let guessedLetters = [];

// Get the word container element from the HTML
const wordContainer = document.getElementById("word-container");

// Display underscores for each letter in the word
for (let i = 0; i < word.length; i++) {
    wordContainer.innerHTML += "<span>_</span>";
}

// Get the guess input and button elements from the HTML
const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");

// Get the result container element from the HTML
const resultContainer = document.getElementById("result-container");

// Function to check if a letter has already been guessed
function alreadyGuessed(letter) {
    return guessedLetters.indexOf(letter) !== -1;
}

// Function to update the display of the word
function updateWordDisplay() {
    let display = "";
    for (let i = 0; i < word.length; i++) {
        if (alreadyGuessed(word[i])) {
            display += word[i];
        } else {
            display += "_";
        }
    }
    wordContainer.innerHTML = display;
}

// Function to check if the user has won
function checkWin() {
    for (let i = 0; i < word.length; i++) {
        if (!alreadyGuessed(word[i])) {
            return false;
        }
    }
    return true;
}

// Function to handle a guess from the user
function handleGuess() {
    let guess = guessInput.value.toLowerCase();

    // Clear the guess input
    guessInput.value = "";

    // Check if the letter has already been guessed
    if (alreadyGuessed(guess)) {
        resultContainer.innerHTML = "You already guessed that letter!";
        return;
    }

    guessedLetters.push(guess);

    // Update the display of the word
    updateWordDisplay();

    // Check if the user has won
    if (checkWin()) {
        resultContainer.innerHTML = "Congratulations! You won!";