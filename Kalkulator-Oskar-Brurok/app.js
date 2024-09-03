const tall2 = document.querySelector("#tall2")
const tall1 = document.querySelector("#tall1")
const sum = document.querySelector("#sum")


function plussbtn() {
   let number1 = Number(tall1.value)
   let number2 = Number(tall2.value)
   sum.innerHTML = Number(number1 + number2)
   console.log(sum)
   
}

function minusbtn() {
    let number1 = Number(tall1.value)
    let number2 = Number(tall2.value)
    sum.innerHTML = Number(number1 - number2)
    console.log(sum)
}

function gangebtn() {
    let number1 = Number(tall1.value)
    let number2 = Number(tall2.value)
    sum.innerHTML = Number(number1 * number2)
    console.log(sum)
}

function delebtn() {
    let number1 = Number(tall1.value)
    let number2 = Number(tall2.value)
    sum.innerHTML = Number(number1 + number2)
    console.log(sum)
}