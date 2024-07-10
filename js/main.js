let operand1 = '';
let operand2 = '';
let operator = '';

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a,  b) {
    if (b !== 0) return a / b;
    else return ('ERROR');
}

function modulus(a, b) {
    if (b !== 0) return a % b;
    else return ('ERROR');
}


function operate(num1, num2, operator) {
    num1 = Number(num1); 
    num2 = Number(num2);

    if (operator === '+') return add(num1,num2);
    else if (operator === '-') return subtract(num1,num2);
    else if (operator === '%') return modulus(num1,num2);
    else if (operator === '÷') return divide(num1, num2);
    else return multiply(num1, num2);
}


//
const input = document.querySelector('#calc-input');
const buttons = document.querySelector('.calc-buttons');


function displayValue(x) {
    if (operator !== '' && operand2 === '') {
        input.value = x;
        operand2 = x;
    }
    else {
        if (input.value === '0') input.value = x;
        else input.value += x;
    }
}

buttons.addEventListener('click', (e) => {
    let target = e.target;
    if (target.id !== '') {
        if (target.classList.contains('number')) {    
            displayValue(target.textContent);
        }
        else if (!target.classList.contains('operator')) {  
            if (target.id === 'clear') {
                input.value = 0;
                operand1 = '';
                operand2 = '';
                operator = '';
            }
            else if (target.id === 'sign') {
                input.value *= -1;
            }
            else {
                input.value += target.textContent;
            }
        }
        else {   
            if (target.id === 'plus') {
                operator = '+';
                operand1 = input.value;
            }
            else if (target.id === 'minus') {
                operator = '-';
                operand1 = input.value;
            }
            else if (target.id === 'multiply') {
                operator = 'x';
                operand1 = input.value;
            }
            else if (target.id === 'divide') {
                operator = '÷';
                operand1 = input.value;
            }
            else if (target.id === 'mod') {
                operator = '%';
                operand1 = input.value;
            }
            else {
                operand2 = input.value;
                input.value = 0;
                displayValue(operate(operand1,operand2,operator));
                operand1 = ''; 
                operand2 = '';
                operator = '';
            }
            
        }
    }
});





