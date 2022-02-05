console.log("hello!")
//(number)=>number.addEventListener('click',()=>console.log("numberPressed!"))

//add a listener to all of the buttons. This//when they are pressed: print button pressed!
let firstnumberPressed=0;
let allNumbers= document.querySelectorAll(".number");
allNumbers.forEach((number)=>number.addEventListener('click', (event)=>{
    console.log(`the number pressed is: ${parseInt(number.id)}`);
    firstnumberPressed= parseInt(number.id);
    let display= document.querySelector(".numbers");
    display.innerHTML=display.innerHTML+firstnumberPressed;
}))

//add a listener to the operation buttons
let operationPressed="";
let allOperations= document.querySelectorAll(".operation");
allOperations.forEach((operation)=>operation.addEventListener('click', (event)=>{
    console.log(`the operation pressed is: ${(operation.id)}`);
    operationPressed= operation.id;
    let display= document.querySelector(".numbers");
    display.innerHTML=display.innerHTML+ operationPressed;
}))

//add a listener to the calculateButton 

let operationCalculate= document.querySelector(".operationCalculate");
operationCalculate.addEventListener('click', (event)=>{
    console.log("calulate button pressed");
    let display= document.querySelector(".numbers");
    let calculationEnteredByTheUser= display.innerHTML;
    let temp= calculationEnteredByTheUser.split('+');
    console.log(temp);
    console.log(operationPressed)


})


