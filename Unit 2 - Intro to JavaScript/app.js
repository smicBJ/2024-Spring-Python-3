// // var myName;

// // myName = "Jonathan";

// let myName = "Nolan"

// myName = "Jack"

// // alert("Hello " + myName);

// console.log(myName)

// let isAdriaanSilly = true

// let myMentalAge = 2

// let moneyInHenrysPocket = 1.3

// console.log(typeof(isAdriaanSilly));
// console.log(typeof(moneyInHenrysPocket));

// let myName = ""

// if (myName) { 
//     console.log("This was the first block")
// } else if (myName == 7) {
//     console.log("This was the second block")
// } else {
//     console.log("This was the third block")
// }

// // function greeting() {
// //     console.log("Hello")
// // }

// let greeting = name => {
//     console.log("Hello " + name)
// }

// greeting("Jon")

// var myStudents = ["Richard", {name: "Adriaan"}, "Nolan"]
// myStudents.push("Henry")

// console.log(myStudents[1].name);

// var myFavoriteStudent = {
//     name: "Henry",
//     age: 17,
//     greeting: () => {console.log("Hello World");}
// }

// myFavoriteStudent.greeting()
// console.log(typeof(myFavoriteStudent));

// let myName = prompt("What is your name?")

// console.log(myName)

let students = [
    {
        name: "Henry",
        age: 17,
        gpa: 4.0,
        grade: 12
    },
    {
        name: "Hudson",
        age: 16,
        gpa: 2.0,
        grade: 11
    },
    {
        name: "Nolan",
        age: 16,
        gpa: 4.16,
        grade: 10
    },
    {
        name: "Jack",
        age: 16,
        gpa: 3.5,
        grade: 10
    }
]

let query = prompt("Which student do you want to know about?")
console.log(query)


function getInfo(student) {
    let query = prompt("What do you want to know about the student? Age, Grade, or GPA")

    if (query == "age") {
        alert(student.age)
    } else if (query == "gpa") {
        alert(student.gpa)
    } else {
        alert(student.grade)
    }
}

// for (let i = 0; i < students.length; i++) {
//     const element = students[i]
//     console.log(element)
// }

// for (const key in students) {
//     console.log(key)
// }

for (const student of students) {

    if (query == student.name) {
        getInfo(student)
    }
}

