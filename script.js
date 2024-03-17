function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function substract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

let firstNumber = 0;
let secondNumber = 0;
let operator = 0;

function operate(firstNumber, secondNumber, operator) {
    if (operator === 'add') {
        return add(firstNumber, secondNumber);
    } if (operator === 'subtract') {
        return substract(firstNumber, secondNumber);
    } if (operator === 'multiply') {
        return multiply(firstNumber, secondNumber);
    } if (operator === 'divide') {
        return divide(firstNumber, secondNumber);
    }
}

displayValue = 0;
document.getElementById('display').innerHTML = displayValue;

function clicked(number) {
    if (displayValue == 0) {
        displayValue = number;
    } else {
    displayValue += number + '';
    }
    document.getElementById('display').innerHTML = displayValue;
}

function clickedClear() {
    displayValue = 0;
    firstNumber = 0;
    secondNumber = 0;
    operator = 0;
    document.getElementById('display').innerHTML = displayValue;
}

function clickedOperator(operatorValue) {
    firstNumber = firstNumber * 1;
    secondNumber = secondNumber * 1;
    if (operator != 0) {
        secondNumber = displayValue * 1;
        firstNumber = operate(firstNumber, secondNumber, operator);
        displayValue = 0;
        operator = operatorValue;
    } else {
        firstNumber = displayValue;
    }
    
    displayValue = 0;
    operator = operatorValue;
}

function clickedNegative() {
    displayValue = displayValue * -1;
    document.getElementById('display').innerHTML = displayValue;
}

function clickedPercent() {
    displayValue = displayValue/100;
    document.getElementById('display').innerHTML = displayValue;

    if (operator != 0) {
        secondNumber = displayValue;
    } else {
        firstNumber = displayValue;
    }
}

function clickedBackspace() {
    if (displayValue <= 9) {
        displayValue = 0;
    } else {
        displayValue = displayValue.substring(0, displayValue.length - 1);
    }
    document.getElementById('display').innerHTML = displayValue;
}

function clickedEquals() {
    secondNumber = displayValue;
    firstNumber = firstNumber * 1;
    secondNumber = secondNumber * 1;

    if (operator == 'divide' && secondNumber === 0) {
        displayValue = 'lmao';
    } else {
    displayValue = Math.round((operate(firstNumber, secondNumber, operator)) * 100) / 100;
    }

    document.getElementById('display').innerHTML = '';

    setTimeout(function() {
        document.getElementById('display').innerHTML = displayValue;
    }, 100);
}

// Pressing = before entering all of the numbers or an operator could cause problems!