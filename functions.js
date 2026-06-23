// functions

// function sayHello(name){
//     console.log("Good morning ", name)
// }

// sayHello("abc")
// sayHello("def")
// sayHello("ghi")
// sayHello("jkl")
// sayHello("mno")

// function calculator(a, b, op){
//     if(op === "+"){
//         console.log(a+b)
//     } else if(op === "-"){
//         console.log(a-b)
//     } else if(op === "*"){
//         console.log(a*b)
//     } else if(op === "/"){
//         console.log(a/b)
//     } else {
//         console.log("Invalid operator")
//     }
// }
// calculator(7,9,"+")
// calculator(77, 45, "-")
// calculator(51, 90, "*")
// calculator(10, 8, "/")

// function calculator(a, b, op){
//     if(op === "+"){
//         return a+b
//     } else if(op === "-"){
//         return a-b
//     } else if(op === "*"){
//         return a*b
//     } else if(op === "/"){
//         return a/b
//     } else {
//         console.log("Invalid operator")
//     }
// }
// const add = calculator(7,9,"+")
// console.log(add+7)
// console.log(calculator(77, 45, "-"))
// calculator(51, 90, "*")
// calculator(10, 8, "/")

// const greeting = function(){
//     console.log("good morning")
// }

// greeting()

// arrow function

// const sum = (a,b) => {
//     console.log(a+b)
// }

// const sum = (a,b) => console.log(a+b)
// const sum = (a,b) => a+b
// const result = sum(7,8)
// console.log(result)

// printTable(9, 15)
// printTable(13, 9)
// printTable(5, 17)

// const printTable = (table, limit) => {
//     for(let i = 1; i <= limit; i++){
//         console.log(`${table} X ${i} = ${table*i}`)
//     }
// }

// printTable(9,15)
// printTable(13, 9)
// printTable(5, 17)

// const greeting = (name = "test") => {
//     console.log("good morning ", name)
// }

// greeting("abc")
// greeting("def")

// setTimeout(()=>{
//     console.log("inside timer")
// },10000)

// (function greeting(){
//     console.log("Good morning")
// })()

// checkEvenOdd

const capitalFirstChar = (name) => {
    // console.log(name[0].toUpperCase() + name.slice(1))
    console.log(name.toUpperCase())
    console.log(name.toLowerCase())
}

capitalFirstChar("name")

// [0]
// charAt(0)