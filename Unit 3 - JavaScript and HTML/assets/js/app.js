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
