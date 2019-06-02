var display = document.getElementById('display');
var multiply = document.getElementById('multiply');
var cookie = document.getElementById('cookie');
var autoclick = document.getElementById('autoclick');

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
    console.log(multiplier);
    multiply.value = 'Multiplier x' + multiplier + ' (next: cost ' + multiplierCost + ')';
}

function displayAutoclick() {
    autoclick.value = 'Autoclick (cost ' + autoclickCost + ')';
}

function increaseScore() {
    score += clickValue;
    displayScore();
}

function multiplyEnabler() {
    if (score >= multplierCost) {
        multiply.disabled = false;
    } else {
        multiply.disabled = true;
    }
}

function increaseMultiplier() {
    score -= multiplierCost;
    multiplier += 1;
    clickValue = multiplier;

    multiplierCost *= multiplier;
    displayScore();
    displayMultiplier();
    
}

displayScore();
displayMultiplier();
autoclick.disabled = true;

click.addEventListener('click', increaseScore);
multiply.addEventListener('click', increaseMultiplier);
autoclick.addEventListener('click', enableautoclick);


