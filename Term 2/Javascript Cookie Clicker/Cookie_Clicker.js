var display = document.getElementById('display');
var multiply = document.getElementById('multiply');
var cookie = document.getElementById('cookie');
var autoclick = document.getElementById('autoclick');
var masterlog = document.getElementById('xd');

var multiplierCost = 15;
var autoclickCost = 50;

var autoclickOn = false;

var score = 0;
var clickValue = 1;
var multiplier = 1;

cookie.onclick = increaseScore;
multiply.onclick = increaseMultiplier

function displayScore() {
    display.innerHTML = score;
}

function displayMultiplier() {
    
    multiply.value = 'Multiplier x' + multiplier + ' (next: cost ' + multiplierCost + ')';
}

function displayAutoclick() {
    autoclick.value = 'Autoclick (cost ' + autoclickCost + ')';
}

function increaseScore() {
    score += clickValue;
    displayScore();
    Gamelog("Increase Score by 'x'");
}


function increaseMultiplier() {
    if (score >= multiplierCost) {
        score -= multiplierCost;
        multiplier += 1;
        clickValue = multiplier;

        multiplierCost *= 2;
        displayScore();
        displayMultiplier();
        Gamelog("Increase Multiplier by 'x'");
    }
}

function Gamelog(message) {
    
    masterlog.innerHTML += message;
}




displayScore();
displayMultiplier();
autoclick.disabled = true;



