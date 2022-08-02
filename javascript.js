const buttonSelect = document.querySelectorAll('button');
const operandASelect = document.querySelectorAll('.operand');
const operandBSelect = document.querySelectorAll('.operand');
const operandCSelect = document.querySelectorAll('.operand');
const operator1Select = document.querySelectorAll('.operator');
const operator2Select = document.querySelectorAll('.operator');
const equalsSelect1 = document.querySelectorAll('.equals');
const equalsSelect2 = document.querySelectorAll('.equals');
const decimalASelect = document.querySelectorAll('.decimal');
const decimalBSelect = document.querySelectorAll('.decimal');
const decimalCSelect = document.querySelectorAll('.decimal');
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

function operator1SelectHandler () {
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
    operandArray = [];
    operandBSelect.forEach(operandBSelect => {
        operandBSelect.addEventListener('click', operandBSelectHandler)
    });
}

function operandBSelectHandler () {
    operator1Select.forEach(operator1Select => {
        operator1Select.removeEventListener('click', operator1SelectHandler)
    });
    const notIncludeB = !operandArray.includes('.');
    displayArray.push(this.value);
    operandArray.push(this.value);
    operandB = Number(operandArray.join(''));
    outputDisplay.textContent = displayArray.join('');
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

function operator2SelectHandler() {
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
}

function operandCSelectHandler() {
    const notIncludeC = !operandArray.includes('.');
    operandA = operandArray[0];
    operandArray2.push(this.value);
    operandC = operandArray2.join('');
    operandB = Number(operandC);
    equationArray[1] = operandB;
    displayArray.push(this.value);
    outputDisplay.textContent = displayArray.join('');
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

//equals button is pressed after 2nd operand entered
function equalsSelect1Handler() {
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
    console.log('final equationArray', equationArray);
    console.log('final operatorArray', operatorArray);
    console.log('final operandArray', operandArray);
    console.log('final displayArray', displayArray);
    console.log('final operandA', operandA);
    console.log('final operandB', operandB);
    equalsSelect1.forEach(equalsSelect1 => {
        equalsSelect1.removeEventListener('click', equalsSelect1Handler)
    });
}

//**Do Not Confuse with equals1**
//equals button is pressed after operandC entered **Do Not Confuse with equals1**
function equalsSelect2Handler() {
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
    console.log('final equationArray', equationArray);
    console.log('final operatorArray', operatorArray);
    console.log('final operandArray', operandArray);
    console.log('final displayArray', displayArray);
    console.log('final operandA', operandA);
    console.log('final operandB', operandB);
    equalsSelect2.forEach(equalsSelect2 => {
        equalsSelect2.removeEventListener('click', equalsSelect2Handler)
    });
    equalsSelect1.forEach(equalsSelect1 => {
        equalsSelect1.removeEventListener('click', equalsSelect1Handler)
    });
}

/////////////////Functioning continuously. Need to add decimal, equal, clear///


//Copy Paste lines only

// const buttonOne = document.getElementById("button-one");
// const buttonTwo = document.getElementById("button-two");
// const buttonThree = document.getElementById("button-three");
// const buttonFour = document.getElementById("button-four");
// const buttonFive = document.getElementById("button-five");
// const buttonSix = document.getElementById("button-six");
// const buttonSeven = document.getElementById("button-seven");
// const buttonEight = document.getElementById("button-eight");
// const buttonNine = document.getElementById("button-nine");
// const buttonZero = document.getElementById("button-zero");
// const buttonDecimal = document.getElementById("button-decimal");
// const buttonDelete = document.getElementById("button-delete");
// const buttonAdd = document.getElementById("button-add");
// const buttonSubtract = document.getElementById("button-subtract");
// const buttonMultiply = document.getElementById("button-multiply");
// const buttonDivide = document.getElementById("button-divide");
// const buttonEquals = document.getElementById("button-equals");
// const buttonClear = document.getElementById("button-clear");


/*
/////////////////
//Can't easily do more than one operation ar a time below, needs decimal places as well
//Restarting with single array, and loop?
/////////////////
const buttonsOperand = document.getElementsByClassName('operand');
const buttonsOperator = document.getElementsByClassName('operator');
const buttonDecimal = document.getElementsByClassName('decimal');
const buttonDelete = document.getElementsByClassName('delete');
const buttonEqual = document.getElementsByClassName('equals');
const buttonClear = document.getElementsByClassName('clear');
const outputDisplay = document.getElementById("output-box");
const operandSelected = document.querySelectorAll('.operand');
const operatorSelected = document.querySelectorAll('.operator');
const operand2Selected = document.querySelectorAll('.operand');
const operator2Selected = document.querySelectorAll('.operator');
const equalsSelected = document.querySelectorAll('.equals');
const clearSelect = document.querySelectorAll('.clear');
operandArray1 = [operandSelected.value];
operatorArray1 = [operatorSelected.textContent];
operandArray2 = [operand2Selected.value];
operatorArray2 = [operator2Selected.textContent];
equationAnswer = [operandArray1];
operandArray1.shift();
operatorArray1.shift();
operandArray2.shift();


// const operand1 = [];
//     operand1[0] = '0';
//     operand1[1] = '1';
//     operand1[2] = '2';
//     operand1[3] = '3';
//     operand1[4] = '4';
//     operand1[5] = '5';
//     operand1[6] = '6';
//     operand1[7] = '7';
//     operand1[8] = '8';
//     operand1[9] = '9';

//for (i = 0; i = 0; i++);



operandSelected.forEach(operandSelected => {
    operandSelected.addEventListener('click', operandFirstHandler)
});

    function operandFirstHandler () {
        operandArray1.push(this.value);
        outputDisplay.textContent = (operandArray1.join(''))
        //console.log(operandArray1.join(''))  //console log
        //console.log(operandArray1);
        operatorSelected.forEach(operatorSelected => {
            operatorSelected.addEventListener('click', operatorFirstHandler)
        });
        clearSelect.forEach(clearSelect => {
            clearSelect.addEventListener('click', clearDisplayHandler)
        });
    };

    function operatorFirstHandler () {
        operatorArray1.push(this.value);
        let displayOperation1 = (operandArray1.join('')) + operatorArray1.join('');
        outputDisplay.textContent = (displayOperation1);
        //console.log(operatorArray1.join('')); //console log
        //console.log(operatorArray1);
        operandSelected.forEach(operandSelected => {
            operandSelected.removeEventListener('click', operandFirstHandler)
        });
        operatorSelected.forEach(operatorSelected => {
            operatorSelected.removeEventListener('click', operatorFirstHandler)
        });
        operand2Selected.forEach(operand2Selected => {
            operand2Selected.addEventListener('click', operandSecondHandler)
        });
    };

    function operandSecondHandler() {
        operandArray2.push(this.value);
        let displayOperation2 = (operandArray1.join('')) 
        + (operatorArray1.join('')) + (operandArray2.join(''));
        outputDisplay.textContent = (displayOperation2);
        //console.log(operandArray2.join(''));
        //console.log(operandArray2);
        equalsSelected.forEach(equalsSelected => {
            equalsSelected.addEventListener('click', equalsHandler)
        });
    };

    function equalsHandler() {
        operand2Selected.forEach(operand2Selected => {
            operand2Selected.removeEventListener('click', operandSecondHandler)
        });
        let operandString1 = operandArray1.join('');
        let operandString2 = operandArray2.join('');
        let operatorString1 = operatorArray1.join('');
        let operandNumber1 = parseFloat(operandString1);
        let operandNumber2 = parseFloat(operandString2);
            if (operatorString1 === '+') {
                outputDisplay.textContent = (operandNumber1) + (operandNumber2)
                //console.log((operandNumber1) + (operandNumber2));
                let equationAnswer = ((operandNumber1) + (operandNumber2));
                operandArray1 = ['', equationAnswer];
                console.log(operandArray1);
            }
            if (operatorString1 === '-') {
                outputDisplay.textContent = (operandNumber1) - (operandNumber2)
                //console.log((operandNumber1) - (operandNumber2));
                let equationAnswer = ((operandNumber1) - (operandNumber2));
                operandArray1 = ['', equationAnswer];
                console.log(operandArray1);
            }
            if (operatorString1 === '*') {
                outputDisplay.textContent = (operandNumber1) * (operandNumber2)
                //console.log((operandNumber1) * (operandNumber2));
                let equationAnswer = ((operandNumber1) * (operandNumber2));
                operandArray1 = ['', equationAnswer];
                console.log(operandArray1);
            }
            if (operatorString1 === '/') {
                outputDisplay.textContent = (operandNumber1) / (operandNumber2)
                //console.log((operandNumber1) / (operandNumber2));
                let equationAnswer = ((operandNumber1) / (operandNumber2));
                operandArray1 = ['', equationAnswer];
                console.log(operandArray1);
            }
            operatorArray1 = [];
            operandArray2 = [];
        //console.log(operandArray1);
        operatorSelected.forEach(operatorSelected => {
            operatorSelected.addEventListener('click', operatorFirstHandler)
        });
    };

    function clearDisplayHandler () {
        operandArray1 = [];
        operandArray2 = [];
        operatorArray1 = [];
        outputDisplay.textContent = '0';
        operand2Selected.forEach(operand2Selected => {
            operand2Selected.removeEventListener('click', operandSecondHandler)
        });
        operatorSelected.forEach(operatorSelected => {
            operatorSelected.removeEventListener('click', operatorFirstHandler)
        });
        equalsSelected.forEach(equalsSelected => {
            equalsSelected.removeEventListener('click', equalsHandler)
        });
        operandSelected.forEach(operandSelected => {
            operandSelected.addEventListener('click', operandFirstHandler)
        });
        clearSelect.forEach(clearSelect => {
            clearSelect.removeEventListener('click', clearDisplayHandler)
        });
    }
    ///////////////// --WORKS TIL HERE-- /////////////////

    */