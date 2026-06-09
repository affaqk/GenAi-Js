// console.log("hello world")
// for, do while, while
// for each, for of, for in
// map, reduce, filter

// for(let i = 0; i < 100; i++){
//     // console.log("hello")
//     if(i%2 === 1){
//         console.log(i)
//     }
// }

// 1) starting point => Initialisation
// 2) ending point => condition
// 3) way of move => increment/decrement

// i+=3

// step 1 ) initialisation 
// step 2 ) condition checking
// step 3 ) Inside loop // 1


// for(let i = 10; i >= 0; i--){
//     console.log(i)
// }

// print table
// let table = 9
// for(let i = 1; i <= 10; i++){
//     // console.log(table * i)
//     // console.log(table + " X " + i + " = " + table * i)
//     console.log(`${table} X ${i} = ${table*i}`)
// }

// let num = 5
// console.log(`hello ${num} world`)
// 9 X 1 = 9
// 9 X 2 = 18
// 9 X 10 = 90

// starting point => 3
// ending point => 89
// if number is divisible by 5 ( you have to add 2 in it)
// if number is divisible by 7 ( you have to subtract 2 from num)

// for(let i = 3; i <= 89; i++){
//     if(i%5 === 0){
//         console.log("Divisible by 5 => ", i+2)
//     }
//     if(i%7 === 0){
//         console.log("Divisible by 7 => ", i-2)
//     }
// }

let name = "madam";
// console.log(name[4]);
let reverse = ""
for(let i = name.length - 1; i >= 0 ;i--){
    console.log(name[i])
    reverse += name[i]
}

if(name === reverse){
    console.log(name, " is palindrome")
} else {
    console.log("Not");
}


// let i is 1 and ending value is i >= 100
// for( i =0 => i >= 100 => i++){
//     print(i)
// }