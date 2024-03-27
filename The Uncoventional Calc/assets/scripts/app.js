let currentResult=0;


function add()
{
    const calcDescription = `${currentResult} + ${userInput.value}`
    currentResult = currentResult+ parseInt(userInput.value)
    outputResult(currentResult,calcDescription)
}

addBtn.addEventListener('click',add);

function subtract()
{
    const calcDescription = `${currentResult} - ${userInput.value}`

    currentResult=currentResult-parseInt(userInput.value)
    outputResult(currentResult,calcDescription)
}

subtractBtn.addEventListener('click',subtract)


function multiply()
{
    const calcDescription = `${currentResult} * ${userInput.value}`

    currentResult=currentResult*parseInt(userInput.value)
    outputResult(currentResult,calcDescription)
}

multiplyBtn.addEventListener('click',multiply)


function divide()
{
    const calcDescription = `${currentResult} / ${userInput.value}`

    currentResult=currentResult/parseInt(userInput.value)
    outputResult(currentResult,calcDescription)
}

divideBtn.addEventListener('click',divide)



