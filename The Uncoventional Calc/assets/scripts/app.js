let currentResult=0;

// takes User input 
function getUserInput(){
    return parseInt(userInput.value);
}

// description of the operation 
function outputDescription(curr,operator,newRes){
    return `${curr} ${operator} ${newRes}`
}

function add()
{
    const parsedNum = getUserInput();
    const curr =currentResult;
    currentResult = currentResult+ parsedNum;
    const calcDescription = outputDescription(curr,'+',currentResult);
    outputResult(currentResult,calcDescription);
}

addBtn.addEventListener('click',add);

function subtract()
{
    const parsedNum = getUserInput();
    const curr =currentResult;
    currentResult = currentResult - parsedNum;
    const calcDescription = outputDescription(curr,'-',currentResult);
    outputResult(currentResult,calcDescription);
}

subtractBtn.addEventListener('click',subtract)


function multiply()
{
    const parsedNum = getUserInput();
    const curr =currentResult;
    currentResult = currentResult * parsedNum;
    const calcDescription = outputDescription(curr,'*',currentResult);
    outputResult(currentResult,calcDescription);
}

multiplyBtn.addEventListener('click',multiply)


function divide()
{
    const parsedNum = getUserInput();
    const curr =currentResult;
    currentResult = currentResult/ parsedNum;
    const calcDescription = outputDescription(curr,'/',currentResult);
    outputResult(currentResult,calcDescription);
}

divideBtn.addEventListener('click',divide)



