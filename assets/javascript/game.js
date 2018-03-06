'use strict'; 

//This will get JS loaded right away 
document.onkeyup = function(){
    alert("working"); 

    let babyGear = ["diapers", "formula", "bottles", "diaper bag", "high chair", "rattle", "crib", "onesies", "rocking chair", "stroller", "car seat", "swaddles", "family help", "babysitters", "patience" ];
    let word; // Selected word
    let guess; // Guess
    let answers = []; // Stored guesses
    let guessesRemaining; // # of guesses left
    let remainingLetters; // letters left in the chosen word
    let counter; // Count correct geusses
    let space; // spaces in between guesses
    let wins; // calculate the number of wins

    let remainingGuesses = document.getElementById("remaining-guesses"); 




    word = babyGear[Math.floor(Math.random() * babyGear.length)];
    form.getElementById('letters').innerHTML = word; 
    document.getElementById('letter').value = guess; 

    // pulling random word from array
    result = function() {
        letters = document.getElementById("current-word");
        correct = document.createElement("ul");
    
        // turning random word into spaces
    for (let i = 0; i < word.length; i++) {
        correct.setAttribute("class", "letters");
        guess = document.createElement("li");
        guess.setAttribute("class", "guess");
        if (word[i] === "-") {
            guess.innerHTML = "-";
            space = 1;
        } else {
            guess.innerHTML = "_";
        }
        // updating word with the input
    for (let w = 0; w < word.length; w++) {
        if (word[w] === guess) {
        answers[w] = guess;
        remainingLetters--;
        }
    }

        // pushing correct guesses to the answers section
        answers.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
    }
    }
    // calculating guesses remaining
    comments = function () {
        showGuessesRemaining.innerHTML = "You have " + guessesRemaining + " guesses remaining";
        if (guessesRemaining < 1) {
          showGuessesRemaining.innerHTML = "Game Over";
        }
        for (var i = 0; i < geusses.length; i++) {
          if (counter + space === geusses.length) {
            showGuessesRemaining.innerHTML = "You Win!";
          }
        }
}}