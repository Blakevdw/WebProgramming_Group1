var display = document.getElementById('display');
var multiply = document.getElementById('multiply');
var cookie = document.getElementById('cookie');

var multiplierCost = 20;

var score = 0;
var clickValue = 1;
var multiplier = 1;

cookie.onclick = increaseScore;

function displayScore() {
    display.innerHTML = score;
}

function displayMultiplier() {
    multiply.value = 'Multiplier x' + multiplier + ' (next: cost ' + multiplierCost + ')';
}


function increaseScore() {
    score += clickValue;
    displayScore();
}

function increaseMultiplier() {
    score -= multiplierCost;
    multiplier += 1;
    clickValue = multiplier;
    if (bonusOn) {
        clickValue *= 2;
    }
    multiplierCost *= multiplier;
    displayScore();
    displayMultiplier();
}

displayScore();
displayMultiplier();
multiply.disabled = true;

click.addEventListener('click', increaseScore);
multiply.addEventListener('click', increaseMultiplier);


