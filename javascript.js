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

document.querySelectorAll('.operand').forEach(item => {
    item.addEventListener('click', function() {
        outputDisplay.textContent = item.value;
    })
})

document.querySelectorAll('.operator').forEach(item => {
    item.addEventListener('click', function() {
        outputDisplay.textContent = item.value;
    })
})

document.querySelectorAll('.decimal').forEach(item => {
    item.addEventListener('click', function() {
        outputDisplay.textContent = item.value;
    })
})

document.querySelectorAll('.delete').forEach(item => {
    item.addEventListener('click', function() {
        outputDisplay.textContent = item.value;
    })
})

document.querySelectorAll('.equals').forEach(item => {
    item.addEventListener('click', function() {
        outputDisplay.textContent = item.value;
    })
})

document.querySelectorAll('.clear').forEach(item => {
    item.addEventListener('click', function() {
        outputDisplay.textContent = item.value;
    })
})




/*
buttonOne.addEventListener('click', function onClick(event) {
    console.log (this.textContent);
});
*/