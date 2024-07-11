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
    let result;
    if (operator === '+') result = add(num1,num2);
    else if (operator === '-') result = subtract(num1,num2);
    else if (operator === '%') result = modulus(num1,num2);
    else if (operator === '÷') result = divide(num1, num2);
    else result = multiply(num1, num2);

    if (typeof result !== 'string') return (Math.round(result * 1000) / 1000);         
    else return result;
} 



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

function handleOperator(operation) {
    if (operand2 !== '' && operation !== '=') {
        operand2 = input.value;
        input.value = 0;
        displayValue(operate(operand1,operand2,operator));
        operator = operation;
        operand1 = input.value;
        operand2 = '';
    }
    else if (operation === '=') {
        operand2 = input.value;
        input.value = 0;
        displayValue(operate(operand1,operand2,operator));
        operand1 = ''; 
        operand2 = '';
        operator = '';
    }
    else {
        operator = operation;
        operand1 = input.value;
    }
}

// get operators
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const divideBtn = document.querySelector('#divide');
const multiplyBtn = document.querySelector('#multiply');

// Resets orange operators default stylings, excluding the = and % operators
function resetOrangeOperator() {
    plusBtn.style.backgroundColor = '#f69906';
    plusBtn.style.color = '#ffffff';

    minusBtn.style.backgroundColor = '#f69906';
    minusBtn.style.color = '#ffffff';
    
    divideBtn.style.backgroundColor = '#f69906';
    divideBtn.style.color = '#ffffff';

    multiplyBtn.style.backgroundColor = '#f69906';
    multiplyBtn.style.color = '#ffffff';
}
// Alternative styling to operator buttons when clicked, excluding the = and % operators
function colorOrangeOperator(button) {
    resetOrangeOperator();
    button.style.backgroundColor = '#ffffff';
    button.style.color = '#f69906';
}


const input = document.querySelector('#calc-input');
const buttons = document.querySelector('.calc-buttons');


buttons.addEventListener('click', (e) => {
    let target = e.target;
    if (input.value === 'ERROR') {
        if (target.id === 'clear') {
            input.value = 0;
            operand1 = '';
            operand2 = '';
            operator = '';
        }
    }
    else {
        if (target.id !== '') {
            if (target.classList.contains('number')) {    
                displayValue(target.textContent);
            }
            else if (!target.classList.contains('operator')) {  
                if (target.id === 'clear') {
                    resetOrangeOperator();
                    input.value = 0;
                    operand1 = '';
                    operand2 = '';
                    operator = '';
                }
                else if (target.id === 'sign') {
                    input.value *= -1;
                }
                else {
                    if (!input.value.includes('.')) input.value += target.textContent;
                }
            }
            else {   
                if (target.id === 'plus') {
                    colorOrangeOperator(target);
                    handleOperator('+');
                }
                else if (target.id === 'minus') {
                    colorOrangeOperator(target);
                    handleOperator('-');
                }
                else if (target.id === 'multiply') {
                    colorOrangeOperator(target);
                    handleOperator('x');
                }
                else if (target.id === 'divide') {
                    colorOrangeOperator(target);
                    handleOperator('÷');
                }
                else if (target.id === 'mod') {
                    resetOrangeOperator();
                    handleOperator('%');
                }
                else {
                    resetOrangeOperator();
                    handleOperator('=');
                }
                
            }
        }
    }
});





