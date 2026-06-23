// collection of similar data ( same datatype )
// int students = [18, 19, 22, 21, 25]
// const students = ["abc",21,true,5.10,"blue"]


// console.log(marks[0])
// console.log(marks[1])
// console.log(marks[2])
// console.log(marks[3])

// for(let i = 0; i <= marks.length - 1; i++){
//     console.log(marks[i])
// }

// jsx

// for of
// for(let mark of marks){
//     console.log(mark)
// }

// for(let index in marks){
//     console.log(index, marks[index])
// }

// marks.forEach((mark)=>{
//     if(mark > 80){
//         console.log(mark)
//     }
// })


// map, filter, reduce


// let marks = [78,90,45,78,23,99];
// let highest = marks[0]

// for(let mark of marks){
//     if(mark > highest){
//         highest = mark // 90 // 99
//     }
// }

// console.log(highest)

// let marks = [78,90,45,78,23,99];
// let total = 0
// square
// for(let mark of marks){
//     console.log(mark ** 2)
// }

// add 2
// for(let mark of marks){
//     console.log(mark + 2)
// }

// sum of array
// marks.forEach((mark)=>{
//     // total = total + mark
//     total+=mark
// })

// console.log(total)

// map // filter

// let students = ["abc", "def", "ghi", "jkl"];
// const newStudents = students.map((student)=>{
//     return student
// })

// console.log(newStudents)



// marks.map((mark)=>{
//     if(mark > 65){
//         console.log(mark)
//     }
// })

// marks.filter((mark)=>{
//     // if(mark > 65){
//     //     console.log(mark)
//     // }

//     console.log(mark > 65)
// })

// const filteredMarks = marks.filter((mark) => mark > 65).map((filteredMark) => console.log(filteredMark))
// console.log(filteredMarks)
// filteredMarks.map((mark)=> console.log(mark))

// let marks = [60,80,34,76];
// let total = marks.reduce((acc, val)=>{
//     return acc + val
// },0)

// console.log(total)

// acc = 0
// val = 60
// 0 + 60
// 60 + 80 => 140
// 140 + 34 => 174
// 174 + 76 => 250


// const products = [500, 800, 700, 560, 340, 890, 322];
// let total = products.filter(product => product>500).map(fproduct => fproduct).reduce((acc, val) => acc+val, 0)
// console.log(total)

// 

// let marks = [56,89,54,90];

// push, pop
// shift, unshift

// marks.push(65)
// console.log(marks)

// marks.pop();
// console.log(marks)
// marks.shift();
// console.log(marks)

// marks.unshift(12);
// console.log(marks)

// const students = ["ali", "ahmed", "haris", "shahzaib", "hammad"]
// console.log(students)

// const students = ["ali","sofia","sara","azan"]

// const filteredStudents = students.filter((student) =>{
//     if(student.charAt(0) === 'a'){
//        return student;
//     }
// })

// console.log(filteredStudents)


// students.filter(student => student[0] === "a" || student[0] === "A").map(std => console.log(std))

// const num = [6,9,4,6];
// num.push(12)
// console.log(num)

// const arr1 = [6,7,8];
// const arr2 = [3,4,5];

// const result = arr1.concat(arr2)
// console.log(result)

// const word = "javascript is programming";

// console.log(word.split("a"))

// ^$%& %&&G&&%$%^&*%£$%^ // buffer data

// const marks = [67, 89, 45, 90, 91];
// console.log(marks.slice(0,3))

// const marks = [89, 67, 45, 90, 91];

// // (first parameter) => index 
// // (second parameter) => How much elements do you want to del
// // ( third parameter )=> elements that you wants to add
// // marks.splice(1,4, 40,50);
// // console.log(marks)

// marks.find(mark => mark >= 60)

// const digits = [8, 6, 9, 4, 23, 7, 5, 8];

// // // find cube of all these elements
// // // if digits > 750 then minus 7 from it
// // // use reduce to sum all filtered elements

// const cube = digits.map(digit => digit ** 3);
// // console.log(cube)

// const filteredDigits = cube.filter(digit => digit > 350)
// // console.log(filteredDigits)

// const minusDigits = filteredDigits.map(digit => digit -= 7)
// // console.log(minusDigits)

// const total = minusDigits.reduce((acc, val) => acc + val, 0)
// console.log(total)

const students = [
    {
        name : "abc",
        marks : 89
    },
    {
        name : "def",
        marks : 49
    },
    {
        name : "ghi",
        marks : 78
    }
]

const total = students.reduce((acc, val) => acc + val.marks, 0)
// console.log(total)

const avg = total/students.length;
console.log(avg)