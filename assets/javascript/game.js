'use strict'; 

//This will get JS loaded right away 
window.onload = function(){

    let babyGear = ["diapers", "formula", "bottles", "diaper bag", "high chair", "rattle", "crib", "onesies", "rocking chair", "stroller", "car seat", "swaddles", "family help", "babysitters", "patience" ];
    let word; // Selected word
    let guess; // Guess
    let guesses = []; // Stored guesses
    let lives; // Lives
    let counter; // Count correct geusses
    let space; // spaces in between guesses

    let remainingGuesses = document.getElementById("remaining-guesses"); 




    // rand = babyGear[Math.floor(Math.random() * babyGear.length)];
    // form.getElementById('letters').innerHTML = rand; 

    // pulling random word from array
    result = function() {
        wordHolder = document.getElementById("current-word");
        correct = document.createElement("ul");
    
        // turning random word into spaces
    for (let i = 0; i < word.length; i++) {
        correct.setAttribute("id", "my-word");
        guess = document.createElement("li");
        guess.setAttribute("class", "guess");
        if (word[i] === "-") {
            guess.innerHTML = "-";
            space = 1;
        } else {
            guess.innerHTML = "_";
        }
    }
    }
}