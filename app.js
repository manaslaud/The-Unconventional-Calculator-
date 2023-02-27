const defaultResult=0;
currentResult=defaultResult;
let logEntries = [];
let calculationType;

function writeToLog(operationIdentifier,prevCalc,operationNumber, newResult)
{
    const logEntry={operation:operationIdentifier,
    prevResult:prevCalc,
    number:operationNumber,
   result:newResult};
   logEntries.push(logEntry);
   console.log(logEntries)
}
function getUserNumberInput(){
    return parseFloat(userInput.value)
}
function createAndWriteLog(operator, resultBeforeCalc, calcNumber){
    const calcDescription= `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult,calcDescription)


}
function calculateResult(calculationType){
    if(calculationType!=='add' && calculationType!=='subtract' &&calculationType!=='multiply' && calculationType!=='divide'){
        return;
    }
    else{
    const enteredNumber= getUserNumberInput();
    const initialResult= currentResult;
    let mathOperator;
    if(calculationType==='add'){
    currentResult= parseFloat(currentResult) + enteredNumber;
    mathOperator='+' 
    }
    else if(calculationType==='subtract'){
        currentResult= parseFloat(currentResult) - enteredNumber;
        mathOperator='-' 
    }
    else if(calculationType==='multiply'){
        currentResult= parseFloat(currentResult) * enteredNumber;
        mathOperator='*' 
    }
    else{
        currentResult= parseFloat(currentResult) / enteredNumber;
        mathOperator='/' 
    }
    createAndWriteLog(mathOperator,initialResult,enteredNumber);
    writeToLog(calculationType,initialResult,enteredNumber,currentResult);
}
}
function add(){
    calculateResult('add')
}
function subtract(){
    calculateResult('subtract')

}
function multiply(){
    calculateResult('multiply')
}
function divide(){
    calculateResult('divide')

}
 addBtn.addEventListener('click',add);
 subtractBtn.addEventListener('click',subtract);
 multiplyBtn.addEventListener('click',multiply);
 divideBtn.addEventListener('click',divide);

 


