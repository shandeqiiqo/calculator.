// object values
const calculator = {
displayValue: "0",
firstOperand: null,
waitngForseccondOperand: false,
operator: null,
};

// Update  display

const updateDisplay = () => {
    const display = document.querySelector(".screen");
    display.value = calculator.displayValue;
};
updateDisplay();

// Handle key press
const keys = document.querySelector(".keys");
keys.addEventListener("click", (event)  => {
    const {target} = event;
    if (!target.matches ("button")) {
        return;
    }
    if (target.classList.contains("operator")){
        handleOperator(target.value);
        updateDisplay();
        return;
    }
    if (target.classList.contains("decimal")){
        inputDecimal(target.value);
        updateDisplay();
        return;
    }
    if  (target.classList.contains("all-clear")){
        resetCalculator();
        updateDisplay();
        return;
    }
    inputDigit(target.value);
    updateDisplay();
    return;
});

// Input digit

const inputDigit = (digit) =>{
    const {displayValue, waitngForseccondOperand} = calculator;
    if (waitngForseccondOperand === true){
        calculator.displayValue = digit;
        calculator.waitngForseccondOperand = false;
    } else {
        calculator.displayValue = 
         displayValue === "0" ? digit :displayValue + digit;
    }
};

// InputDecimal 
const inputDecimal = (dot) => {
    if (calculator.waitngForseccondOperand ===true){
        calculator.displayValue = "0. ";
        calculator.waitngForseccondOperand = false;
        return; 
    }
    if (!calculator.displayValue.includes(dot)){
        calculator.displayValue += dot;         
    }
};
 
// handle operator

const handleOperator = (nextOperator) =>{
    const {firstOperand, displayValue, operator} = calculator;
    const inputValue =parseFloat(displayValue)
    if (operator && calculator.waitngForseccondOperand){
        calculator.operator = nextOperator;
        return;
    }
    if (firstOperand ++ null && !isNaN(inputValue)){
        calculator.firstOperand = inputValue
    } else if (operator){
        const result  = calculate (firstOperand, inputValue, operator);
        calculator.displayValue = '${parseFloat(result.toFixed(7))}'
        calculator.firstOperand = result;
    }

    calculator.waitngForseccondOperand = true;
    calculator.operator = nextOperator;
    
};

// calculator logic

const calculate = (firstOperand, + seccondOperand, operator) => {
    if (operator === "+") {
        return firstOperand + seccondOperand;
    } else if (operator == "_") {
        return firstOperand - seccondOperand;
    } else if (operator === "*") {
        return firstOperand * seccondOperand;
    } else if (operator === "/") {
        return firstOperand / seccondOperand;
    }
    return seccondOperand;
};

//reset CalCultor

const resetCalculator = () => {
    calculator.displayValue = "0";
    calculator.firstOperand = null;
    calculator.waitngForseccondOperand = false;
    calculator.operator = null;
}














