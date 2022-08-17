
const numbers = document.querySelectorAll('.numbers > button');
const displayLabel = document.querySelector('.display_value');
const operators = document.querySelectorAll('.operators > button');

const enteredValue = [];
const operatesArray = ['+','-','*','/']


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
function operate(num1, oper, num2) {
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
//If array[-1] is operator and button clicks is operators
// 	Then replace array[-1] with new operator
//Else if array[-1] is number and array has operator and button click is equals or button click is opertor
// 	Then figure out math
//else
// 	Then add new number to array
function numEntered() {
    lastArrayElement = enteredValue[enteredValue.length - 1];
    buttonClicked = this.innerText;

    if (operatesArray.includes(lastArrayElement) && operatesArray.includes(buttonClicked)) {
        enteredValue[enteredValue.length - 1] = buttonClicked;
        displayLabel.innerHTML = enteredValue.join("");
    }
    // else if () {

    // }
    else {
        enteredValue.push(buttonClicked);
        console.log(lastArrayElement);
        displayLabel.innerHTML = enteredValue.join("");
    }

}

numbers.forEach(number => number.addEventListener('click',numEntered));
operators.forEach(oper => oper.addEventListener('click',numEntered));
