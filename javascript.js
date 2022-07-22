/*
const buttonOne = document.getElementById("button-one");
const buttonTwo = document.getElementById("button-two");
const buttonThree = document.getElementById("button-three");
const buttonFour = document.getElementById("button-four");
const buttonFive = document.getElementById("button-five");
const buttonSix = document.getElementById("button-six");
const buttonSeven = document.getElementById("button-seven");
const buttonEight = document.getElementById("button-eight");
const buttonNine = document.getElementById("button-nine");
const buttonZero = document.getElementById("button-zero");
const buttonDecimal = document.getElementById("button-decimal");
const buttonDelete = document.getElementById("button-delete");
const buttonAdd = document.getElementById("button-add");
const buttonSubtract = document.getElementById("button-subtract");
const buttonMultiply = document.getElementById("button-multiply");
const buttonDivide = document.getElementById("button-divide");
const buttonEquals = document.getElementById("button-equals");
const buttonClear = document.getElementById("button-clear");
const outputBox = document.getElementById("output-box");
*/

outputDisplay = document.getElementById('output-box');

const buttonsOperand = document.getElementsByClassName('operand');
const buttonsOperator = document.getElementsByClassName('operator');
const buttonDecimal = document.getElementsByClassName('decimal');
const buttonDelete = document.getElementsByClassName('delete');
const buttonEqual = document.getElementsByClassName('equals');
const buttonClear = document.getElementsByClassName('clear');
const array1 = [];
const arrayOp = [];
let operandFirst = 0;
let operandSecond = 0;
const arrayAnswer = [];

//const outputArray = [num1, operator, num2];
//const outputResult = numAnswer

//function array1()
//for (i = 0; i < 1; i++)

//calculate(operandFirst, operandSecond);

//function calculate(operandFirst, operandSecond)
    document.querySelectorAll('button').forEach(item => {
        item.addEventListener('click', function() {
                array1.push(item.value);
                //let buttonPressed = num1
                let operandFirst = array1.join('');
                outputDisplay.textContent = operandFirst;
                console.log(operandFirst);
                return operandFirst;
                
        });
    });

    document.querySelectorAll('.operator').forEach(item => {
        item.addEventListener('click', function() {
            arrayOp.push(item.value);
            let operatorSelected = arrayOp.join('');
            outputDisplay.textContent = operatorSelected;
            console.log(operatorSelected);
        });
    });

    document.querySelectorAll('.equals').forEach(item => {
        item.addEventListener('click', function() {
            arrayAnswer.push(item.value);
            let answerPushed = arrayAnswer.join('');
            outputDisplay.textContent = operatorSelected;
            console.log(operatorSelected);
        });
    }); //working on. replace item.value because you don't want = to appear on the line

/* document.querySelectorAll('.operator').forEach(item => {
    item.addEventListener('click', function() {
        let operatorSelected = item.value;
        outputDisplay.textContent = (operandFirst + operatorSelected);
        console.log(operatorSelected)
    })
})
 */

//}

    /*
    document.querySelectorAll('.operator').forEach(item => {
        item.addEventListener('click', function() {
            let buttonPressed = item.className
            outputDisplay.textContent = item.value;
            console.log(buttonPressed); //pull className from click
        })
    })

    document.querySelectorAll('.decimal').forEach(item => {
        item.addEventListener('click', function() {
            let buttonPressed = item.className
            outputDisplay.textContent = item.value;
            console.log(buttonPressed); //pull className from click
        })
    })

    document.querySelectorAll('.delete').forEach(item => {
        item.addEventListener('click', function() {
            let buttonPressed = item.className
            outputDisplay.textContent = item.value;
            console.log(buttonPressed); //pull className from click
        })
    })

    document.querySelectorAll('.equals').forEach(item => {
        item.addEventListener('click', function() {
            let buttonPressed = item.className
            outputDisplay.textContent = item.value;
            console.log(buttonPressed); //pull className from click
        })
    })

    document.querySelectorAll('.clear').forEach(item => {
        item.addEventListener('click', function() {
            let buttonPressed = item.className
            outputDisplay.textContent = item.value;
            console.log(buttonPressed); //pull className from click
        })
    })
*/
//}


/*
buttonOne.addEventListener('click', function onClick(event) {
    console.log (this.textContent);
});
*/