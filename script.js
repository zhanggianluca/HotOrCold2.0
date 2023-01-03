function initialize() {
    number = Math.floor(Math.random()*101);

    outputDiv = document.getElementById("output"); 
    guess = 50; 
    outputDiv.innerHTML = guess; 

    numberLog = document.getElementById("lognum"); 
    numberLog.innerHTML = "<br>" + guess; 

    respLog = document.getElementById("logresp"); 
    response = ""; 
    getResponse(); 
    respLog.innerHTML = "<br>" + response;

    guessRemaining = document.getElementById("num"); 
    guesses = 5; 

    winningStatement = document.getElementById("win"); 
    winningStatement.innerHTML = ""; 
    console.log(number);  

}

function getResponse() {
    if (Math.abs(guess-number) <= 5) {
        response = "Very Hot"; 
    }
    else if (Math.abs(guess-number) <= 8 && Math.abs(guess-number) >= 6) {
        response = "Hot";
    }
    else if (Math.abs(guess-number) <= 15 && Math.abs(guess-number) >= 9) {
        response = "Very Warm";
    }
    else if (Math.abs(guess-number) <= 20 && Math.abs(guess-number) >= 16) {
        response = "Warm";
    }
    else if (Math.abs(guess-number) <= 30 && Math.abs(guess-number) >= 21) {
        response = "Cool";
    }
    else if (Math.abs(guess-number) <= 40 && Math.abs(guess-number) >= 31) {
        response = "Very Cool";
    }
    else if (Math.abs(guess-number) <= 55 && Math.abs(guess-number) >= 41) {
        response = "Cold";
    }
    else {
        response = "Very Cold"; 
    }
}

function addOne() {
    guess++; 
    outputDiv.innerHTML = guess; 
}

function subOne() {
    guess--; 
    if (guess < 0) {
        guess = 0; 
    }
    outputDiv.innerHTML = guess; 
}

function addFive() {
    guess = guess + 5; 
    outputDiv.innerHTML = guess; 
}

function subFive() {
    guess = guess - 5; 
    if (guess < 0) {
        guess = 0; 
    }
    outputDiv.innerHTML = guess; 
}

function addTen() {
    guess = guess + 10; 
    outputDiv.innerHTML = guess; 
}

function subTen() {
    guess = guess - 10;
    if (guess < 0) {
        guess = 0; 
    } 
    outputDiv.innerHTML = guess; 
}

function add25() {
    guess = guess + 25; 
    outputDiv.innerHTML = guess; 
}

function sub25() {
    guess = guess -25;
    if (guess < 0) {
        guess = 0; 
    } 
    outputDiv.innerHTML = guess; 
}

function logNumber() { 
    if (guesses != 0) {
        numberLog.innerHTML += "<br>" + guess;
    }
}

function logResponse() {
    if (guesses != 0) {
        respLog.innerHTML += "<br>" + response;
    }   
}

function subGuess() {
    guesses--; 
    if (guesses < 0) {
        guesses = 0; 
    }
    guessRemaining.innerHTML = guesses; 
    guessRemaining.style.color = 'red'; 
}

function submit() {
    if (guess > 100 || guess < 0) {
        winningStatement.innerHTML = "Your guess must be a number within 1-100"; 
    }
    else {
        winningStatement.innerHTML = ""; 
        subGuess(); 
        getResponse(); 
        logNumber(); 
        logResponse(); 
        win(); 
        lose(); 
    }
    
}

function win() {
    if (guess == number) {
        winningStatement.innerHTML = "Congratulations, you have guessed the number!"; 
    }
}

function lose() {
    if (guess != number && guesses == 0) {
        winningStatement.innerHTML = "Unfortunately, the number was " + number + ". You couldn't guess the number within five guesses. Try Again"; 
    }
}

function reset() {
    initialize(); 
}

