// How to use Javascript to change the H1
let myElement = document.querySelector("h1")
console.log(myElement)
console.log(myElement.innerText)

let counter = 0
let exampleString = `He once said "Hello" to me`
console.log(exampleString)

function changeH1() {
    counter++
    myElement.innerText = `My button was clicked: ${counter}`
    console.log(counter)
}

// let query = prompt("Change it to what?")

// changeH1(query)

myElement.onclick = () => {
    myElement.innerText = "Ouch! Don't click me, you idiot!"
}

let myInput = document.getElementById("name")
let mySecondTitle = document.querySelector("h2")
console.log(myInput)

let greeting = () => {
    console.log(myInput.value)
    mySecondTitle.innerText = `Hello, ${myInput.value}!`
}


let myClickTitle = document.getElementById("click-title")
let myClickInput = document.getElementById("click-input")

console.log(myClickInput)
console.log(myClickTitle)

let editTitle = () => {
    myClickInput.value = myClickTitle.innerText
    myClickTitle.classList.toggle("hidden")
    myClickInput.classList.toggle("hidden")
}

let titleEdited = () => {
    myClickTitle.innerText = myClickInput.value
    myClickInput.classList.toggle("hidden")
    myClickTitle.classList.toggle("hidden")
}