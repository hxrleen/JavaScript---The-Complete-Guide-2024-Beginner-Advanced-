let currentResult=0;


function add()
{
    currentResult = currentResult+ parseInt(userInput.value)
    outputResult(currentResult,'')
}

addBtn.addEventListener('click',add);

function subtract()
{
    currentResult=currentResult-parseInt(userInput.value)
    outputResult(currentResult,'')
}

subtractBtn.addEventListener('click',subtract)


function multiply()
{
    currentResult=currentResult*parseInt(userInput.value)
    outputResult(currentResult,'')
}

multiplyBtn.addEventListener('click',multiply)


function divide()
{
    currentResult=currentResult/parseInt(userInput.value)
    outputResult(currentResult,'')
}

divideBtn.addEventListener('click',divide)



