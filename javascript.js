const buttonSelect = document.querySelectorAll('button');
const operandASelect = document.querySelectorAll('.operand');
const operandBSelect = document.querySelectorAll('.operand');
const operandCSelect = document.querySelectorAll('.operand');
const operator1Select = document.querySelectorAll('.operator');
const operator2Select = document.querySelectorAll('.operator');
const equalsSelect = document.querySelectorAll('.equals');
const outputDisplay = document.getElementById("output-box");
displayArray = [buttonSelect.textContent];
operandArray = [operandASelect.value];
operandArray2 = [operandCSelect.value];
operatorArray = [operator1Select.value];
operatorArray2 = [operator2Select.value];
equationArray = [];
    equationArray[0] = [];
    equationArray[1] = [];

operandASelect.forEach(operandASelect => {
    operandASelect.addEventListener('click', operandASelectHandler)
});

function operandASelectHandler () {
    displayArray.push(this.value);
    operandArray.push(this.value);
    operandA = Number(operandArray.join(''));
    outputDisplay.textContent = displayArray.join('');
    operator1Select.forEach(operator1Select => {
        operator1Select.addEventListener('click', operator1SelectHandler)
    });
    //console.log('Start-- operandA', operandA);
    //console.log('operand array 1', operandArray)
};

function operator1SelectHandler () {
    operandASelect.forEach(operandASelect => {
        operandASelect.removeEventListener('click', operandASelectHandler)
    });
    console.log('1stbefore', operatorArray);
    console.log('1stbefore', operatorArray.join(''));
    operatorArray = [];
    console.log('1stafter', operatorArray);
    console.log('1stafter', operatorArray.join(''));
    equationArray[1] = operandA;
    displayArray.push(this.value);
    operatorArray.push(this.value);
    operatorString1 = operatorArray[0];
    //console.log(operatorString1);
    outputDisplay.textContent = displayArray.join('');
    //console.log(' Start-- equationArray', equationArray);
    //console.log('operand array 1',operandArray);
    operandArray = [];
    //console.log('operand array 1 cleared',operandArray);
    //console.log('operatorArray', operatorArray);
    operandBSelect.forEach(operandBSelect => {
        operandBSelect.addEventListener('click', operandBSelectHandler)
    });
}

function operandBSelectHandler () {
    operator1Select.forEach(operator1Select => {
        operator1Select.removeEventListener('click', operator1SelectHandler)
    });
    displayArray.push(this.value);
    operandArray.push(this.value);
    operandB = Number(operandArray.join(''));
    outputDisplay.textContent = displayArray.join('');
    //console.log('error1', displayArray);
    //console.log('error1', displayArray.join(''));
    operator2Select.forEach(operator2Select => {
        operator2Select.addEventListener('click', operator2SelectHandler)
    });
};

function operator2SelectHandler() {
    operator2Array = [];
    operator2Array.push(this.value);
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
             outputDisplay.textContent = (equationArray[1]) + (operator2Array[0]);
             console.log('error+1', displayArray);
             console.log('error+1', displayArray.join(''));
             displayArray = [(equationArray[1]), (operator2Array[0])];
             console.log('error+2', displayArray);
             console.log('error+2', displayArray.join(''));
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
             outputDisplay.textContent = (equationArray[1]) + (operator2Array[0]);
             console.log('error-1', displayArray);
             console.log('error-1', displayArray.join(''));
             displayArray = [(equationArray[1]), (operator2Array[0])];
             console.log('error-2', displayArray);
             console.log('error-2', displayArray.join(''));
             operandArray = [];
             operator2Array.shift();
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
             outputDisplay.textContent = (equationArray[1]) + (operator2Array[0]);
             console.log('error*1', displayArray);
             console.log('error*1', displayArray.join(''));
             displayArray = [(equationArray[1]), (operator2Array[0])];
             console.log('error*2', displayArray);
             console.log('error*2', displayArray.join(''));
             operandArray = [];
             operator2Array.shift();
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
             outputDisplay.textContent = (equationArray[1]) + (operator2Array[0]);
             console.log('error/1', displayArray);
             console.log('error/1', displayArray.join(''));
             displayArray = [(equationArray[1]), (operator2Array[0])];
             console.log('error/2', displayArray);
             console.log('error/2', displayArray.join(''));
             operandArray = [];
             operator2Array.shift();
             equationArray.shift();
            //  console.log('this equationArray', equationArray);
            //  console.log('this operatorArray', operatorArray);
            //  console.log('this operandArray', operandArray);
            //  console.log('this operandA', operandA);
            //  console.log('this operandB', operandB);
            //  console.log('this displayArray', displayArray.join(''));
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

        console.log('2ndbefore', operatorArray);
        console.log('2ndbefore', operatorArray.join(''));
        operatorArray = [];
    operatorArray.push(this.value);
    console.log('2ndafter', operatorArray);
    console.log('2ndafter', operatorArray.join(''));
    let operationResult = equationArray[0];
    operandArray = [operationResult];
    //console.log('first result', operandArray);
}

function operandCSelectHandler() {
    operandA = operandArray[0];
    //console.log('before', operandA)
    console.log('lastbeforedisplay', displayArray);
    console.log('lastbeforedisplay', displayArray.join(''));
    displayArray.push(this.value);
    console.log('lastafterdisplay', displayArray);
    console.log('lastafterdisplay', displayArray.join(''));
    operandArray2.push(this.value);
    operandC = operandArray2.join('');
    operandB = Number(operandC);
    equationArray[1] = operandB;
    outputDisplay.textContent = (operandA) + (operator2Array[0]) + (operandB);
    // console.log('here displayArray', displayArray);
    // console.log('here operandArray', operandArray);
    // console.log('here operandArray2', operandArray2);
    // console.log('here operandArray2.join', operandArray2.join(''));
    // console.log('here operandA', operandA);
    // console.log('here operandB', operandB);
    // console.log('here operandC', operandC);
    // console.log('here equationArray[0]', equationArray[0]);
    // console.log('here equationArray[1]', equationArray[1]);
    operator2Select.forEach(operator2Select => {
        operator2Select.addEventListener('click', operator2SelectHandler)
    });
    // if (document.getElementsByClassName('.operator').clicked == true) {
    //     operandArray.push(operandB);
    //     console.log('IMPORTANT', operandArray);
    // };
};

//OPERTOR NOT WORKING ARRAY1 and ARRAY2 need to fix////////////////////////


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