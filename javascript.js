//After decimal is deleted, cannot re-enter decimal without entering operand.
//No length limit on characters entered or solution. No decimal place limit.
//Delete button still works after operandB and C are entered and removed--
//causing entire display to be erasable, need to end event listener.

const buttonSelect = document.querySelectorAll('button');
const operandASelect = document.querySelectorAll('.operand');
const operandBSelect = document.querySelectorAll('.operand');
const operandCSelect = document.querySelectorAll('.operand');
const operator1Select = document.querySelectorAll('.operator');
const operator2Select = document.querySelectorAll('.operator');
const operator2AltSelect = document.querySelectorAll('.operator');
const equalsSelect1 = document.querySelectorAll('.equals');
const equalsSelect2 = document.querySelectorAll('.equals');
const decimalASelect = document.querySelectorAll('.decimal');
const decimalBSelect = document.querySelectorAll('.decimal');
const decimalCSelect = document.querySelectorAll('.decimal');
const deleteOperandASelect = document.querySelectorAll('.delete');
const deleteOperator1Select = document.querySelectorAll('.delete');
const deleteOperandBSelect = document.querySelectorAll('.delete');
const deleteOperator2Select = document.querySelectorAll('.delete');
const deleteOperandCSelect = document.querySelectorAll('.delete');
const clearSelect = document.querySelectorAll('.clear');
const outputDisplay = document.getElementById("output-box");
displayArray = [buttonSelect.textContent];
operandArray = [operandASelect.value];
operandArray2 = [operandCSelect.value];
operatorArray = [operator1Select.value];
equationArray = [];
    equationArray[0] = [];
    equationArray[1] = [];

operandASelect.forEach(operandASelect => {
    operandASelect.addEventListener('click', operandASelectHandler)
});

clearSelect.forEach(clearSelect => {
    clearSelect.addEventListener('click', clearSelectHandler)
});

function operandASelectHandler () {
    const notIncludeA = !operandArray.includes('.');
    displayArray.push(this.value);
    operandArray.push(this.value);
    operandA = Number(operandArray.join(''));
    outputDisplay.textContent = displayArray.join('');
    if (notIncludeA) {
        decimalASelect.forEach(decimalASelect => {
            decimalASelect.addEventListener('click', decimalASelectHandler)
        });
    }
    deleteOperandASelect.forEach(deleteOperandASelect => {
        deleteOperandASelect.addEventListener('click', deleteOperandASelectHandler)
    });
    operator1Select.forEach(operator1Select => {
        operator1Select.addEventListener('click', operator1SelectHandler)
    });
};

function decimalASelectHandler () {
    displayArray.push(this.value);
    operandArray.push(this.value);
    operandA = Number(operandArray.join(''));
    outputDisplay.textContent = displayArray.join('');
    decimalASelect.forEach(decimalASelect => {
        decimalASelect.removeEventListener('click', decimalASelectHandler)
    });
};

function deleteOperandASelectHandler () {
    displayArray.pop();
    operandArray.pop();
    operandA = Number(operandArray.join(''));
    outputDisplay.textContent = displayArray.join('');
    decimalASelect.forEach(decimalASelect => {
        decimalASelect.removeEventListener('click', decimalASelectHandler)
    });
};

function operator1SelectHandler () {
    deleteOperandASelect.forEach(deleteOperandASelect => {
        deleteOperandASelect.removeEventListener('click', deleteOperandASelectHandler)
    });
    operandASelect.forEach(operandASelect => {
        operandASelect.removeEventListener('click', operandASelectHandler)
    });
    operator1Select.forEach(operator1Select => {
        operator1Select.removeEventListener('click', operator1SelectHandler);
    });
    decimalASelect.forEach(decimalASelect => {
        decimalASelect.removeEventListener('click', decimalASelectHandler)
    });
    operatorArray = [];
    equationArray[1] = operandA;
    displayArray.push(this.value);
    operatorArray.push(this.value);
    operatorString1 = operatorArray[0];
    outputDisplay.textContent = displayArray.join('');
    deleteOperator1Select.forEach(deleteOperator1Select => {
        deleteOperator1Select.addEventListener('click', deleteOperator1SelectHandler)
    });
    operandArray = [];
    operandBSelect.forEach(operandBSelect => {
        operandBSelect.addEventListener('click', operandBSelectHandler)
    });
};

function deleteOperator1SelectHandler () {
    displayArray.pop();
    operatorArray = [];
    operatorString1 = operatorArray[0];
    outputDisplay.textContent = displayArray.join('');
    deleteOperator1Select.forEach(deleteOperator1Select => {
        deleteOperator1Select.removeEventListener('click', deleteOperator1SelectHandler)
    });
    operator1Select.forEach(operator1Select => {
        operator1Select.addEventListener('click', operator1SelectHandler)
    });
};

function operandBSelectHandler () {
    deleteOperator1Select.forEach(deleteOperator1Select => {
        deleteOperator1Select.removeEventListener('click', deleteOperator1SelectHandler)
    });
    operator1Select.forEach(operator1Select => {
        operator1Select.removeEventListener('click', operator1SelectHandler)
    });
    const notIncludeB = !operandArray.includes('.');
    displayArray.push(this.value);
    operandArray.push(this.value);
    operandB = Number(operandArray.join(''));
    outputDisplay.textContent = displayArray.join('');

    deleteOperandBSelect.forEach(deleteOperandBSelect => {
        deleteOperandBSelect.addEventListener('click', deleteOperandBSelectHandler)
    });
    if (notIncludeB) {
        decimalBSelect.forEach(decimalBSelect => {
            decimalBSelect.addEventListener('click', decimalBSelectHandler)
        });
    };
    operator2Select.forEach(operator2Select => {
        operator2Select.addEventListener('click', operator2SelectHandler)
    });
    equalsSelect1.forEach(equalsSelect1 => {
        equalsSelect1.addEventListener('click', equalsSelect1Handler)
    });
};

function decimalBSelectHandler () {
    displayArray.push(this.value);
    operandArray.push(this.value);
    operandB = Number(operandArray.join(''));
    outputDisplay.textContent = displayArray.join('');
    decimalBSelect.forEach(decimalBSelect => {
        decimalBSelect.removeEventListener('click', decimalBSelectHandler)
    });
};

function deleteOperandBSelectHandler () {
    displayArray.pop();
    operandArray.pop();
    operandB = Number(operandArray.join(''));
    outputDisplay.textContent = displayArray.join('');
    decimalBSelect.forEach(decimalBSelect => {
        decimalBSelect.removeEventListener('click', decimalBSelectHandler)
    });
};

function operator2SelectHandler() {
    deleteOperandBSelect.forEach(deleteOperandBSelect => {
        deleteOperandBSelect.removeEventListener('click', deleteOperandBSelectHandler)
    });
    decimalASelect.forEach(decimalASelect => {
        decimalASelect.removeEventListener('click', decimalASelectHandler)
    });
    decimalBSelect.forEach(decimalBSelect => {
        decimalBSelect.removeEventListener('click', decimalBSelectHandler)
    });
    decimalCSelect.forEach(decimalCSelect => {
        decimalCSelect.removeEventListener('click', decimalCSelectHandler)
    });
    equalsSelect1.forEach(equalsSelect1 => {
        equalsSelect1.removeEventListener('click', equalsSelect1Handler)
    });
    equalsSelect2.forEach(equalsSelect2 => {
        equalsSelect2.removeEventListener('click', equalsSelect2Handler)
    });
    operatorArray.push(this.value);
    operatorString1 = operatorArray[0];
    operandArray2 = [];
    equationArray[0] = operandA;
    equationArray[1] = operandB;
    let x = Number(operandA);
    let y = Number(operandB);
        if (operatorString1 == '+') {
            let operandA = (x);
            let operandB = (y);
            let operationResult = (operandA) + (operandB);
             equationArray[1] = operationResult;
             operandArray = [];
             operatorArray.shift();
             equationArray.shift();
             operandCSelect.forEach(operandCSelect => {
                operandCSelect.addEventListener('click', operandCSelectHandler)
            });
             operandBSelect.forEach(operandBSelect => {
                operandBSelect.removeEventListener('click', operandBSelectHandler)
            });
             operator2Select.forEach(operator2Select => {
                operator2Select.removeEventListener('click', operator2SelectHandler);
            });
        } else if (operatorString1 == '-') {
            let operandA = (x);
            let operandB = (y);
            let operationResult = (operandA) - (operandB);
             equationArray[1] = operationResult;
             operandArray = [];
             operatorArray.shift();
             equationArray.shift();
             operandCSelect.forEach(operandCSelect => {
                operandCSelect.addEventListener('click', operandCSelectHandler)
            });
             operandBSelect.forEach(operandBSelect => {
                operandBSelect.removeEventListener('click', operandBSelectHandler)
            });
             operator2Select.forEach(operator2Select => {
                operator2Select.removeEventListener('click', operator2SelectHandler);
            });   
        } else if (operatorString1 == '*') {
            let operandA = (x);
            let operandB = (y);
            let operationResult = (operandA) * (operandB);
             equationArray[1] = operationResult;
             operandArray = [];
             operatorArray.shift();
             equationArray.shift();
             operandCSelect.forEach(operandCSelect => {
                operandCSelect.addEventListener('click', operandCSelectHandler)
            });
             operandBSelect.forEach(operandBSelect => {
                operandBSelect.removeEventListener('click', operandBSelectHandler)
            });
             operator2Select.forEach(operator2Select => {
                operator2Select.removeEventListener('click', operator2SelectHandler);
            });
        } else if (operatorString1 == '/') {
            let operandA = (x);
            let operandB = (y);
            let operationResult = (operandA) / (operandB);
             equationArray[1] = operationResult;
             operandArray = [];
             operatorArray.shift();
             equationArray.shift();
             operandCSelect.forEach(operandCSelect => {
                operandCSelect.addEventListener('click', operandCSelectHandler)
            });
             operandBSelect.forEach(operandBSelect => {
                operandBSelect.removeEventListener('click', operandBSelectHandler)
            });
             operator2Select.forEach(operator2Select => {
                operator2Select.removeEventListener('click', operator2SelectHandler);
            });
        }
    let operationResult = equationArray[0];
    operandArray = [operationResult];
    displayArray = [];
    displayArray.push(operationResult);
    displayArray.push(this.value);
    outputDisplay.textContent = displayArray.join('');
    deleteOperator2Select.forEach(deleteOperator2Select => {
        deleteOperator2Select.addEventListener('click', deleteOperator2SelectHandler)
    });
}

function deleteOperator2SelectHandler () {
    operandCSelect.forEach(operandCSelect => {
        operandCSelect.removeEventListener('click', operandCSelectHandler)
    });
    let operationResult = equationArray[0];
    operandArray = [operationResult];
    displayArray = [];
    displayArray.push(operationResult);
    displayArray.push(this.value);
    displayArray.pop();
    operatorArray.pop();
    operatorString1 = operatorArray[0];
    outputDisplay.textContent = displayArray.join('');
    deleteOperator2Select.forEach(deleteOperator2Select => {
        deleteOperator2Select.removeEventListener('click', deleteOperator2SelectHandler)
    });
    operator2AltSelect.forEach(operator2AltSelect => {
        operator2AltSelect.addEventListener('click', operator2AltSelectHandler)
    });
};

//If operator2 is deleted, alt operator needed for re-entry without calculation
function operator2AltSelectHandler() {
    displayArray.push(this.value);
    operatorArray.push(this.value);
    outputDisplay.textContent = displayArray.join('');
    deleteOperator2Select.forEach(deleteOperator2Select => {
        deleteOperator2Select.addEventListener('click', deleteOperator2SelectHandler)
    });
    operator2AltSelect.forEach(operator2AltSelect => {
        operator2AltSelect.removeEventListener('click', operator2AltSelectHandler)
    });
    operandCSelect.forEach(operandCSelect => {
        operandCSelect.addEventListener('click', operandCSelectHandler)
    });
};

function operandCSelectHandler() {
    deleteOperator2Select.forEach(deleteOperator2Select => {
        deleteOperator2Select.removeEventListener('click', deleteOperator2SelectHandler)
    });
    const notIncludeC = !operandArray.includes('.');
    operandA = operandArray[0];
    operandArray2.push(this.value);
    operandC = operandArray2.join('');
    operandB = Number(operandC);
    equationArray[1] = operandB;
    displayArray.push(this.value);
    outputDisplay.textContent = displayArray.join('');
    deleteOperandCSelect.forEach(deleteOperandCSelect => {
        deleteOperandCSelect.addEventListener('click', deleteOperandCSelectHandler)
    });
    if (notIncludeC) {
        decimalCSelect.forEach(decimalCSelect => {
            decimalCSelect.addEventListener('click', decimalCSelectHandler)
        });
    };
    operator2Select.forEach(operator2Select => {
        operator2Select.addEventListener('click', operator2SelectHandler)
    });
    equalsSelect2.forEach(equalsSelect2 => {
        equalsSelect2.addEventListener('click', equalsSelect2Handler)
    });
};

function decimalCSelectHandler () {
    operandA = operandArray[0];
    operandArray2.push(this.value);
    operandC = operandArray2.join('');
    operandB = Number(operandC);
    equationArray[1] = operandB;
    displayArray.push(this.value);
    outputDisplay.textContent = displayArray.join('');
    decimalCSelect.forEach(decimalCSelect => {
        decimalCSelect.removeEventListener('click', decimalCSelectHandler)
    });
};

function deleteOperandCSelectHandler () {
    operandA = operandArray[0];
    operandArray2.pop();
    operandC = operandArray2.join('');
    operandB = Number(operandC);
    equationArray[1] = operandB;
    displayArray.pop();
    outputDisplay.textContent = displayArray.join('');
    decimalCSelect.forEach(decimalCSelect => {
        decimalCSelect.removeEventListener('click', decimalCSelectHandler)
    });
}

//Equals -- equals pressed after operandB is entered (1st operation)
function equalsSelect1Handler() {
    deleteOperandASelect.forEach(deleteOperandASelect => {
        deleteOperandASelect.removeEventListener('click', deleteOperandASelectHandler)
    });
    deleteOperandBSelect.forEach(deleteOperandBSelect => {
        deleteOperandBSelect.removeEventListener('click', deleteOperandBSelectHandler)
    });
    deleteOperandCSelect.forEach(deleteOperandCSelect => {
        deleteOperandCSelect.removeEventListener('click', deleteOperandCSelectHandler)
    });
    deleteOperator1Select.forEach(deleteOperator1Select => {
        deleteOperator1Select.removeEventListener('click', deleteOperator1SelectHandler)
    });
    deleteOperator2Select.forEach(deleteOperator2Select => {
        deleteOperator2Select.removeEventListener('click', deleteOperator2SelectHandler)
    });
    decimalASelect.forEach(decimalASelect => {
        decimalASelect.removeEventListener('click', decimalASelectHandler)
    });
    decimalBSelect.forEach(decimalBSelect => {
        decimalBSelect.removeEventListener('click', decimalBSelectHandler)
    });
    decimalCSelect.forEach(decimalCSelect => {
        decimalCSelect.removeEventListener('click', decimalCSelectHandler)
    });
    operator2Select.forEach(operator2Select => {
        operator2Select.removeEventListener('click', operator2SelectHandler)
    });
    operandBSelect.forEach(operandBSelect => {
        operandBSelect.removeEventListener('click', operandBSelectHandler)
    });
    operatorString1 = operatorArray[0];
    equationArray[0] = operandA;
    equationArray[1] = operandB;
    let x = Number(operandA);
    let y = Number(operandB);
        if (operatorString1 == '+') {
            let operationResult = (operandA) + (operandB);
            equationArray = [];
                equationArray[0] = [];
                equationArray[1] = [operationResult];
             operandArray = [];
             operatorArray=[];
            operator1Select.forEach(operator1Select => {
                operator1Select.addEventListener('click', operator1SelectHandler);
            });
        } else if (operatorString1 == '-') {
            let operationResult = (operandA) - (operandB);
            equationArray = [];
                equationArray[0] = [];
                equationArray[1] = [operationResult];
             operandArray = [];
            operator1Select.forEach(operator1Select => {
                operator1Select.addEventListener('click', operator1SelectHandler);
            });   
        } else if (operatorString1 == '*') {
            let operationResult = (operandA) * (operandB);
            equationArray = [];
                equationArray[0] = [];
                equationArray[1] = [operationResult];
             operandArray = [];
            operator1Select.forEach(operator1Select => {
                operator1Select.addEventListener('click', operator1SelectHandler);
            });
        } else if (operatorString1 == '/') {
            let operationResult = (operandA) / (operandB);
            equationArray = [];
                equationArray[0] = [];
                equationArray[1] = [operationResult];
             operandArray = [];
            operator1Select.forEach(operator1Select => {
                operator1Select.addEventListener('click', operator1SelectHandler);
            });
        }
        let operationResult = Number(equationArray[1])
        displayArray = [];
        displayArray.push(equationArray[1]);
        outputDisplay.textContent = displayArray[0];
        operandA = operationResult;
    equalsSelect1.forEach(equalsSelect1 => {
        equalsSelect1.removeEventListener('click', equalsSelect1Handler)
    });
}

//Equals 2 -- equals pressed after operandC is entered (continuous operation)
function equalsSelect2Handler() {
    deleteOperandASelect.forEach(deleteOperandASelect => {
        deleteOperandASelect.removeEventListener('click', deleteOperandASelectHandler)
    });
    deleteOperandBSelect.forEach(deleteOperandBSelect => {
        deleteOperandBSelect.removeEventListener('click', deleteOperandBSelectHandler)
    });
    deleteOperandCSelect.forEach(deleteOperandCSelect => {
        deleteOperandCSelect.removeEventListener('click', deleteOperandCSelectHandler)
    });
    deleteOperator1Select.forEach(deleteOperator1Select => {
        deleteOperator1Select.removeEventListener('click', deleteOperator1SelectHandler)
    });
    deleteOperator2Select.forEach(deleteOperator2Select => {
        deleteOperator2Select.removeEventListener('click', deleteOperator2SelectHandler)
    });
    decimalASelect.forEach(decimalASelect => {
        decimalASelect.removeEventListener('click', decimalASelectHandler)
    });
    decimalBSelect.forEach(decimalBSelect => {
        decimalBSelect.removeEventListener('click', decimalBSelectHandler)
    });
    decimalCSelect.forEach(decimalCSelect => {
        decimalCSelect.removeEventListener('click', decimalCSelectHandler)
    });
    operator2Select.forEach(operator2Select => {
        operator2Select.removeEventListener('click', operator2SelectHandler)
    });
    operandCSelect.forEach(operandCSelect => {
        operandCSelect.removeEventListener('click', operandCSelectHandler)
    });
    operatorString1 = operatorArray[0];
    equationArray[0] = operandA;
    equationArray[1] = operandB;
    let x = Number(operandA);
    let y = Number(operandB);
        if (operatorString1 == '+') {
            let operationResult = (operandA) + (operandB);
            equationArray = [];
                equationArray[0] = [];
                equationArray[1] = [operationResult];
             operandArray = [];
             operatorArray=[];
            operator1Select.forEach(operator1Select => {
                operator1Select.addEventListener('click', operator1SelectHandler);
            });
        } else if (operatorString1 == '-') {
            let operationResult = (operandA) - (operandB);
            equationArray = [];
                equationArray[0] = [];
                equationArray[1] = [operationResult];
             operandArray = [];
            operator1Select.forEach(operator1Select => {
                operator1Select.addEventListener('click', operator1SelectHandler);
            });   
        } else if (operatorString1 == '*') {
            let operationResult = (operandA) * (operandB);
            equationArray = [];
                equationArray[0] = [];
                equationArray[1] = [operationResult];
             operandArray = [];
            operator1Select.forEach(operator1Select => {
                operator1Select.addEventListener('click', operator1SelectHandler);
            });
        } else if (operatorString1 == '/') {
            let operationResult = (operandA) / (operandB);
            equationArray = [];
                equationArray[0] = [];
                equationArray[1] = [operationResult];
             operandArray = [];
            operator1Select.forEach(operator1Select => {
                operator1Select.addEventListener('click', operator1SelectHandler);
            });
        }
        let operationResult = Number(equationArray[1])
        displayArray = [];
        displayArray.push(equationArray[1]);
        outputDisplay.textContent = displayArray[0];
        operandA = operationResult;
    equalsSelect2.forEach(equalsSelect2 => {
        equalsSelect2.removeEventListener('click', equalsSelect2Handler)
    });
    equalsSelect1.forEach(equalsSelect1 => {
        equalsSelect1.removeEventListener('click', equalsSelect1Handler)
    });
};

function clearSelectHandler () {
    displayArray = [];
    operandArray = [];
    operandArray2 = [];
    operatorArray = [];
    equationArray = [];
        equationArray[0] = [];
        equationArray[1] = [];
    outputDisplay.textContent = '0';
    operandASelect.forEach(operandASelect => {
        operandASelect.addEventListener('click', operandASelectHandler)
    });
    operandBSelect.forEach(operandBSelect => {
        operandBSelect.removeEventListener('click', operandBSelectHandler)
    });
    operandCSelect.forEach(operandCSelect => {
        operandCSelect.removeEventListener('click', operandCSelectHandler)
    });
    decimalASelect.forEach(decimalASelect => {
        decimalASelect.removeEventListener('click', decimalASelectHandler)
    });
    decimalBSelect.forEach(decimalBSelect => {
        decimalBSelect.removeEventListener('click', decimalBSelectHandler)
    });
    decimalCSelect.forEach(decimalCSelect => {
        decimalCSelect.removeEventListener('click', decimalCSelectHandler)
    });
    operator1Select.forEach(operator1Select => {
        operator1Select.removeEventListener('click', operator1SelectHandler)
    });
    operator2Select.forEach(operator2Select => {
        operator2Select.removeEventListener('click', operator2SelectHandler)
    });
    equalsSelect2.forEach(equalsSelect2 => {
        equalsSelect2.removeEventListener('click', equalsSelect2Handler)
    });
    equalsSelect1.forEach(equalsSelect1 => {
        equalsSelect1.removeEventListener('click', equalsSelect1Handler)
    });
    operator2AltSelect.forEach(operator2AltSelect => {
        operator2AltSelect.removeEventListener('click', operator2AltSelectHandler)
    });
};