console.log("Hello World");

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