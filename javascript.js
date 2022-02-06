console.log("hello!")
//(number)=>number.addEventListener('click',()=>console.log("numberPressed!"))

//add a listener to all of the buttons. This//when they are pressed: print button pressed!
let firstnumberPressed = 0;
let allNumbers = document.querySelectorAll(".number");
allNumbers.forEach((number) => number.addEventListener('click', (event) => {
    console.log(`the number pressed is: ${parseInt(number.id)}`);
    firstnumberPressed = parseInt(number.id);
    let display = document.querySelector(".numbers");
    display.innerHTML = display.innerHTML + firstnumberPressed;
}))

//add a listener to the operation buttons
let operationPressed = "";
let allOperations = document.querySelectorAll(".operation");
allOperations.forEach((operation) => operation.addEventListener('click', (event) => {
    console.log(`the operation pressed is: ${(operation.id)}`);
    operationPressed = operation.id;
    let display = document.querySelector(".numbers");
    display.innerHTML = display.innerHTML + operationPressed;
}))

//add a listener to the del and the AC buttons now:~
let delButton = document.querySelector(".delButton");
delButton.addEventListener("click", (event) => {
    let display = document.querySelector(".numbers");
    let calculationEnteredByTheUser = display.innerHTML;
    let operands = calculationEnteredByTheUser.split('');
    operands.splice(operands.length - 1, 1);
    let displayAfterDelete = "";
    operands.forEach(num => displayAfterDelete = displayAfterDelete + num);
    displayAnswer(displayAfterDelete);
});

let ACButton = document.querySelector(".ACButton");
ACButton.addEventListener("click", (event) => {
    displayAnswer("");
});


//function to display the answer on the calculator
displayAnswer = function (answer) {
    let display = document.querySelector(".numbers");
    display.innerHTML = answer;
}

//add a listener to the calculateButton 

let operationCalculate = document.querySelector(".operationCalculate");
operationCalculate.addEventListener('click', (event) => {
    console.log("calulate button pressed");
    let display = document.querySelector(".numbers");
    let calculationEnteredByTheUser = display.innerHTML;
    let operands = calculationEnteredByTheUser.split(operationPressed);
    console.log(operands);

    let firstOperandConvertedToNumber=0;
    let secondOperandConvertedToNumber=0;
    //convert the strings into numbers, and then make a switch case and update the dom.
    if(!(operands[0].includes(".") || operands[1].includes("."))){
        console.log("none of the operands contains decimal")
         firstOperandConvertedToNumber = parseInt(operands[0]);
         secondOperandConvertedToNumber = parseInt(operands[1]);
    }
    else{
        if((operands[0].includes("."))){
         firstOperandConvertedToNumber = parseFloat(operands[0]);
         secondOperandConvertedToNumber = parseInt(operands[1]);
        }
        else{
        firstOperandConvertedToNumber = parseInt(operands[0]);
        secondOperandConvertedToNumber = parseFloat(operands[1]);
        }
    }

    switch (operationPressed) {
        case '+':
            displayAnswer(firstOperandConvertedToNumber + secondOperandConvertedToNumber)
            break;
        case '-':
            displayAnswer(firstOperandConvertedToNumber - secondOperandConvertedToNumber)
            break;
        case 'x':
            displayAnswer(firstOperandConvertedToNumber * secondOperandConvertedToNumber)
            break;
        case '/':
            displayAnswer(firstOperandConvertedToNumber / secondOperandConvertedToNumber)
            break;
        default:
            console.log(`Sorry, we are out of ${expr}.`);
    }

});
