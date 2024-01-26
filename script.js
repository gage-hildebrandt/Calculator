let previousValue = '';
let operator = '';
let currentValue = '';

document.addEventListener('DOMContentLoaded', function() {
    let clear = document.querySelector('#clear-btn');
    let equals = document.querySelector('.equals');
    let decimal = document.querySelector('.decimal');

    let number = document.querySelectorAll('.number');
    let operators = document.querySelectorAll('.operator');

    let previousScreen = document.querySelector('.previous');
    let currentScreen = document.querySelector('.current');

    number.forEach((number) => number.addEventListener('click', function(e) {
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener('click', function(e) {
        handleOperator(e.target.textContent)
        previousScreen.textContent = previousValue + '' + operator;
        currentScreen.textContent = currentValue;
    }))

    clear.addEventListener('click', function() {
        previousValue = '';
        currentValue = '';
        operator = '';
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue
    })

    equals.addEventListener('click', function() {
        caclulate();
        previousScreen.textContent = '';
        currentScreen.textContent = previousValue;
    })
})

function handleNumber(num) {
    if (currentValue.length <= 5) {
    currentValue += num;
    }
}

function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

function caclulate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operator === '+') {
        previousValue += currentValue;
    } else if (operator === '-') {
        previousValue -= currentValue;
    } else if (operator === 'x') {
        previousValue *= currentValue;
    } else {
        previousValue /= currentValue;
    }

    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();

    console.log(caclulate);
}

function roundNumber(num) {
    return Math.round(num * 1000) / 1000;
}
