const add = (a, b) => {
    result = a + b;
    console.log(result);
}

const subtract = (a, b) => {
    result = a - b;
    console.log(result);
}

const multiply = (a, b) => {
    result = a * b;
    console.log(result);
}

const divide = (a, b) => {
    result = a / b;
    console.log(result);
}

let firstNumber = null;

let operator = null;

let secondNumber = null;

const operate = (a, operator, b) => {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return 'Invalid operator ';
    }
}