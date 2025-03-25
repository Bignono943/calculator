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

function calculator(operator, a, b) {

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



