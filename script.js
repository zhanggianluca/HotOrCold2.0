function initialize() {
    number = Math.floor(Math.random()*101);

    outputDiv = document.getElementById("output"); 
    guess = 50; 
    outputDiv.innerHTML = guess; 
    
    response=""; 
    color=""; //Color based on response; color contrast and clarity
    getResponse(); 

    logTable = document.getElementById("log");
    clearRows();  
    var newRow = logTable.insertRow();
    var newCell = newRow.insertCell(); 
    newCell.innerHTML = 50; 
    newCell = newRow.insertCell(); 
    newCell.innerHTML = response; 
    newCell.style.color = color;  
    

    guessRemaining = document.getElementById("num"); 
    guesses = 5;
    guessRemaining.innerHTML = 5;  

    winningStatement = document.getElementById("win"); 
    winningStatement.innerHTML = ""; 
    console.log(number);  

}

function clearRows() {
    for (var i = 1; i < logTable.rows.length; ++i) {
        logTable.deleteRow(i); 
        i--; 
    } 
}

function getResponse() {
    if (Math.abs(guess-number) <= 5) {
        response = "Very Hot"; 
        color="red"; 
    }
    else if (Math.abs(guess-number) <= 8 && Math.abs(guess-number) >= 6) {
        response = "Hot";
        color="red";
    }
    else if (Math.abs(guess-number) <= 15 && Math.abs(guess-number) >= 9) {
        response = "Very Warm";
        color="red";
    }
    else if (Math.abs(guess-number) <= 20 && Math.abs(guess-number) >= 16) {
        response = "Warm";
        color="red";
    }
    else if (Math.abs(guess-number) <= 30 && Math.abs(guess-number) >= 21) {
        response = "Cool";
        color="#2d9af3";
    }
    else if (Math.abs(guess-number) <= 40 && Math.abs(guess-number) >= 31) {
        response = "Very Cool";
        color="#2d9af3";
    }
    else if (Math.abs(guess-number) <= 55 && Math.abs(guess-number) >= 41) {
        response = "Cold";
        color="#2d9af3";
    }
    else {
        response = "Very Cold"; 
        color="#2d9af3";
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
        updateLog(); 
        win(); 
        lose(); 
    }
    
}

function updateLog() {
    if (guesses != 0) {
        var newRow = logTable.insertRow();
        var newCell = newRow.insertCell(); 
        newCell.innerHTML = guess; 
        newCell = newRow.insertCell(); 
        newCell.innerHTML = response; 
        newCell.style.color = color; 
    }
}

function win() {
    if (guess == number) {
        winningStatement.innerHTML = "Congratulations, you have guessed the number!"; 
        winningStatement.style.padding = "20px"; 
    }
}

function lose() {
    if (guess != number && guesses == 0) {
        winningStatement.innerHTML = "Unfortunately, the number was " + number + ". You couldn't guess the number within five guesses. Try Again"; 
        winningStatement.style.padding = "20px"; 
    }
}


