

function operate(operator, a, b) {

    a = parseFloat(a);
    b = parseFloat(b);

    switch (operator) {

        case '+':
        return a + b ;

        case '-':
            return a - b;

        case '*':
            return a * b;
            
        case '/':
          return b !== 0 ? a / b : content.textContent = 'Erreur, on peut pas diviser par zéro';

        default:
            return null;
    }

};

let firstNumber = '';
let secondNumber = '';
let operator = '';
let shouldResetDisplay = false;
let result = null;

function updateDisplay(value) {
    const display = document.getElementById('display');
    display.textContent = value;
  }

  function updateDisplayOperator(sign) {
    const displayOperator = document.getElementById('display-operator');
    displayOperator.textContent = sign;
  }

  const clear = document.getElementById('clear');
  clear.addEventListener('click', () => {
    shouldResetDisplay = false;
     firstNumber = '';
     secondNumber = '';
     operator = null;
     result = null;
     content.textContent = '';
    updateDisplay(0);
    updateDisplayOperator('=');
  });

const digits = document.querySelectorAll('.digit');
digits.forEach((button) => {
  button.addEventListener('click', () => {

     if (shouldResetDisplay) {
        updateDisplay('');
        shouldResetDisplay = false;
     }
     
     if (!operator) {
        firstNumber += button.textContent;
        updateDisplay(firstNumber);

     } 
       if (firstNumber && operator) {
        secondNumber += button.textContent;
        updateDisplay(secondNumber);
       }
 
    } 
  );
});

const operators = document.querySelectorAll('.operator');
operators.forEach((button) => {
    button.addEventListener('click', () => {

    

        if (!firstNumber) {
            operator = '';
            updateDisplay(0);


         } else if (secondNumber) {

            result = operate(operator, firstNumber, secondNumber);
            firstNumber = result;
            secondNumber = '';
            updateDisplay(result);
        }

        operator = button.textContent;
        updateDisplayOperator(operator);
        shouldResetDisplay = true;
    })
});

const equals = document.getElementById('equals');
equals.addEventListener('click', () => {

    if (!secondNumber) {
        content.textContent = 'Erreur, veuillez faire un calcul valide'
        return null;
    }

    result = operate(operator, firstNumber, secondNumber);
    updateDisplay(result);
    updateDisplayOperator('=');
    content.textContent = '';

    firstNumber = result;
    secondNumber = '';
    operator = null;
    shouldResetDisplay = true;
})

const container = document.querySelector('.top-container');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = '';
container.appendChild(content);

// les oprators et digits sint assignés, dans digits si il y a un operator on remplace value par le secondNumber, 
// maintenant il faut faire en sorte que s'il y a un un first + operatot + secondnumber, appellé une fonction de calcul si l'utilsateur reappuie sur un operator, 
// en stockant le resultat en tant que first number

// actuellement le code bug car a partir du deuxieme oppérateur il affiche le secondnumber sans être calculé
// solution : créer une fonction pour faire les calculs en fonctions de choix et enlever ces parties dans les boutons




