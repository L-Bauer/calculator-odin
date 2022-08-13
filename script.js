
const numbers = document.querySelectorAll('.numbers > button');
const displayLabel = document.querySelector('.display_value');
const operators = document.querySelector('.operators');

const enteredValue = [];


//Math Functions - addition, subtraction, multiplication, division 
function add(a,b) {
    c = a + b;
    return c
}

function sub(a,b) {
    c = a - b;
    return c
}

function multi(a,b) {
    c = a * b;
    return c
}

function div(a,b) {
    c = a / b;
    return c
}

//Inputs 2 numbers and math operator
//Outputs: final number from math operation
function operate(num1, num2, oper) {
    if (oper == '+') {
        total = add(num1,num2);
    }
    else if (oper == '-') {
        total = sub(num1, num2);
    }
    else if (oper == '*') {
        total = multi(num1,num2);
    }
    else if (oper == '/') {
        total = div(num1, num2);
    }
    else {
        alert('Not a math operation');
        return
    }
    return total;        
}


//Displays the numbers entered
//Only one period can be in the number
function numEntered() {
    if (enteredValue.includes('.') && this.innerText == '.') {
        return
    }
    else {
        enteredValue.push(this.innerText);
        console.log(enteredValue);
        displayLabel.innerHTML = enteredValue.join("");
    }
}

numbers.forEach(number => number.addEventListener('click',numEntered))