function add(a, b) {

    return a + b;
};

function soustract(a, b) {

    return a - b;
};

function multiply(a, b) {

    return a * b;
};

function divide(a, b) {

    if (b === 0) {

        return 'We Cant divide by zero'
    }

    return a / b;
};

function operate(operator, a, b) {

    if (operator === '+') {

        return add(a, b);
    }

    else if (operator === '-') {

        return soustract(a, b); 
    }

    else if (operator === '*') {

        return multiply(a, b);
    }

    else if (operator === '/') {

        return divide(a, b);
    }

    else {

        return 'Please select a valid operator'
    }

};

let firstNumber = '';
let secondNumber = '';
let operator = null;
let shouldResetDisplay = false;


function updateDisplay(value) {
  const display = document.getElementById('display');
  display.textContent = value;
}


const digits = document.querySelectorAll('.digit');
digits.forEach((button) => {
  button.addEventListener('click', () => {
    if (shouldResetDisplay) {
      firstNumber = '';
      shouldResetDisplay = false;
    }
    firstNumber += button.textContent;
    updateDisplay(firstNumber);
  });
});

const equals = document.getElementById('equals');
equals.addEventListener('click', () => {
  if (!firstNumber || !operator || !secondNumber) return; 
  const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
  updateDisplay(result);
  firstNumber = result; 
  secondNumber = '';
  operator = null;
});



