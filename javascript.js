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
        //let operandFirst = (operandArray1.join('')); //not in use
        outputDisplay.textContent = (operandArray1.join(''))
        //console.log(operandArray1.join(''))  //console log
        //console.log(operandArray1);
        operatorSelected.forEach(operatorSelected => {
            operatorSelected.addEventListener('click', operatorFirstHandler)
        });
    };

    function operatorFirstHandler () {
        operatorArray1.push(this.value);
        //let operand1 = (operandArray1.join('')) //not in use
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
    }; //operaTORHandler

    function operandSecondHandler() {
        operandArray2.push(this.value);
        //let operandSecond = (operandArray2.join('')); //not in use
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
    ///////////////// --WORKS TIL HERE-- /////////////////


        
     //operANDSecondHandler

        // equalsSelected.forEach(equalsSelected => {
        //     equalsSelected.addEventListener('click', equalsHandler)
        // });
    //    operator2Selected.forEach(operator2Selected => {
     //       operator2Selected.addEventListener('click', operatorSecondHandler)
     //   });
    // function operatorSecondHandler () {
    //     operatorArray2.push(this.value);
    //     let operatorChoice = (this.value);
    //     operandSelected.forEach(operandSelected => {
    //         operandSelected.removeEventListener('click', operatorSecondHandler)
    //     let displayOperation = operandFirst + operatorChoice;
    //     outputDisplay.textContent = (displayOperation);
    //     });
    //     operator2Selected.forEach(operator2Selected => {
    //         operator2Selected.removeEventListener('click', operatorSecondHandler)
    //     });


    // function equalsHandler() {
    //     operandArray1.shift();
    //     operatorArray.shift();
    //     operandArray2.shift();
    //     console.log(operandArray1);
    //     console.log(operatorArray);
    //     console.log(operandArray2);
        //operandArray2.push(this.value);
            // let operandSecond = (operandArray2.join(''));
            // let displayOperation2 = operandFirst + operatorChoice + operandSecond;
            // outputDisplay.textContent = displayOperation2;
        
        //}; //equalsHandler
        //};//operaTORSecondHandler


///////////////// Currently displays (operand1 [operator] operand 2), and then breaks.
///////////////// need to create a calculate function next. Need to loop.
///////////////// currently dealing with 3 separate arrays.





//operandArray2 = [];
//operatorArray = [];
//equationArray = [operandArray1, operandArray2];
//let operandFirst = operandArray1.join('');
//let operator = operatorArray.join('');



//     buttonSelected.forEach(buttonSelected => {
//         document.addEventListener('click', operandFirstHandler)
//     });

// //need a function here to remove event listener
// //for loop or if statement to set limit / operator click?
// //

//     function operandFirstHandler () {

//         operand1.push(buttonSelected);
//         console.log(operand1);
//         let operandFirst = Number(operandArray1.join(''));
//         outputDisplay.textContent = operandFirst;
//         return operandFirst;
//     }

    // document.querySelectorAll('.operator').forEach(item => {
    //     item.addEventListener('click', function() {
    //             operatorArray.pop();
    //             operatorArray.push(item.value);
    //             let operator = operatorArray.join('');
    //             outputDisplay.textContent = operator;
    //             console.log(operator);
    //     });
    // });

    // document.querySelectorAll('.operand').forEach(item => {
    //     item.addEventListener('click', function() {
    //             operandArray2.push(item.value);
    //             let operandSecond = Number(operandArray2.join(''));
    //             outputDisplay.textContent = operandSecond;
    //             console.log(operandSecond);
    //             return operandSecond;
    //     });
    // });



// -------------------------------------------------------------------
// outputDisplay = document.getElementById('output-box');

// const buttonsOperand = document.getElementsByClassName('operand');
// const buttonsOperator = document.getElementsByClassName('operator');
// const buttonDecimal = document.getElementsByClassName('decimal');
// const buttonDelete = document.getElementsByClassName('delete');
// const buttonEqual = document.getElementsByClassName('equals');
// const buttonClear = document.getElementsByClassName('clear');
// const array1 = [];
// const arrayOp = [];
// let operandFirst = 0;
// let operandSecond = 0;
// const arrayAnswer = [];

// //const outputArray = [num1, operator, num2];
// //const outputResult = numAnswer

// //function array1()
// //for (i = 0; i < 1; i++)

// //calculate(operandFirst, operandSecond);

// //function calculate(operandFirst, operandSecond)
//     document.querySelectorAll('button').forEach(item => {
//         item.addEventListener('click', function() {
//                 array1.push(item.value);
//                 //let buttonPressed = num1
//                 let operandFirst = array1.join('');
//                 outputDisplay.textContent = operandFirst;
//                 console.log(operandFirst);
//                 return operandFirst;
                
//         });
//     });

//     document.querySelectorAll('.operator').forEach(item => {
//         item.addEventListener('click', function() {
//             arrayOp.push(item.value);
//             let operatorSelected = arrayOp.join('');
//             outputDisplay.textContent = operatorSelected;
//             console.log(operatorSelected);
//         });
//     });

//     document.querySelectorAll('.equals').forEach(item => {
//         item.addEventListener('click', function() {
//             arrayAnswer.push(item.value);
//             let answerPushed = arrayAnswer.join('');
//             outputDisplay.textContent = operatorSelected;
//             console.log(operatorSelected);
//         });
//     }); //working on. replace item.value because you don't want = to appear on the line

// /* document.querySelectorAll('.operator').forEach(item => {
//     item.addEventListener('click', function() {
//         let operatorSelected = item.value;
//         outputDisplay.textContent = (operandFirst + operatorSelected);
//         console.log(operatorSelected)
//     })
// })
//  */

// //}

//     /*
//     document.querySelectorAll('.operator').forEach(item => {
//         item.addEventListener('click', function() {
//             let buttonPressed = item.className
//             outputDisplay.textContent = item.value;
//             console.log(buttonPressed); //pull className from click
//         })
//     })

//     document.querySelectorAll('.decimal').forEach(item => {
//         item.addEventListener('click', function() {
//             let buttonPressed = item.className
//             outputDisplay.textContent = item.value;
//             console.log(buttonPressed); //pull className from click
//         })
//     })

//     document.querySelectorAll('.delete').forEach(item => {
//         item.addEventListener('click', function() {
//             let buttonPressed = item.className
//             outputDisplay.textContent = item.value;
//             console.log(buttonPressed); //pull className from click
//         })
//     })

//     document.querySelectorAll('.equals').forEach(item => {
//         item.addEventListener('click', function() {
//             let buttonPressed = item.className
//             outputDisplay.textContent = item.value;
//             console.log(buttonPressed); //pull className from click
//         })
//     })

//     document.querySelectorAll('.clear').forEach(item => {
//         item.addEventListener('click', function() {
//             let buttonPressed = item.className
//             outputDisplay.textContent = item.value;
//             console.log(buttonPressed); //pull className from click
//         })
//     })
// */
// //}


// /*
// buttonOne.addEventListener('click', function onClick(event) {
//     console.log (this.textContent);
// });
// */

