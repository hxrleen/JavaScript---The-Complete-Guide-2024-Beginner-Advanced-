const task3Element = document.getElementById('task-3');

function alertNothing(){
    alert("This is an alert")
}

function alertName(name){
    alert(name)
}


alertNothing();
alertName('Harleen');

task3Element.addEventListener('click',alertNothing);


function threeString(x,y,z)
{
    return x+y+z;
}


const newString = threeString('Hello','Welcome','Back');

alert(newString)