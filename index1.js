let currentInput = '';
let currentOperator = '';
let result = 0;

function clearScreen() {
    currentInput = '';
    currentOperator = '';
    updateScreen();
}

function changeSign() {
    currentInput = -parseFloat(currentInput);
    updateScreen();
}

function percentage() {
    currentInput = parseFloat(currentInput) / 100;
    updateScreen();
}

function appendNumber(number) {
    currentInput += number;
    updateScreen();
}

function appendOperator(operator) {
    if (currentInput !== '') {
        if (currentOperator !== '') {
            calculateResult();
        }
        currentOperator = operator;
        result = parseFloat(currentInput);
        currentInput = '';
    }
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateScreen();
    }
}

function calculateResult() {
    if (currentOperator !== '' && currentInput !== '') {
        switch (currentOperator) {
            case '+':
                result += parseFloat(currentInput);
                break;
            case '-':
                result -= parseFloat(currentInput);
                break;
            case '*':
                result *= parseFloat(currentInput);
                break;
            case '/':
                result /= parseFloat(currentInput);
                break;
            default:
                break;
        }
        currentOperator = '';
        currentInput = result.toString();
        updateScreen();
    }
}

function updateScreen() {
    document.getElementById('result').value = currentInput || '0';
}
