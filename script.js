let operator = prompt("enter 1 for add, 2 for subtract, 3 for multiply, 4 for divide")
let num1 = Number(prompt("enter the first Number"))
let num2 = Number(prompt("enter the second number"))

function calculator(){

    if(operator == 1){
        result = num1 + num2
        alert(`${num1} + ${num2} = ${result}`)
    }

    else if(operator == 2){
        result = num1 - num2
        alert(`${num1} - ${num2} = ${result}`)
    }

    else if(operator == 3){
        result = num1 * num2
        alert(`${num1} * ${num2} = ${result}`)
    }

    else if(operator == 4){
        result = num1 / num2
        alert(`${num1} / ${num2} = ${result}`)
    }

    else{
        alert("This is not a valid operation")
    }
}

calculator()