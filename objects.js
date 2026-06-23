// const student = {
//     name : "abc",
//     age : 21,
//     qualification : "Software engineering",
//     hobbies : ["horse riding", "swimming"],
//     address : {
//         sector : "F-11",
//         city : "Islamabad"
//     }
// }

// console.log(student.name, student.address.sector, student.hobbies[0])

// const product = {
//     img : "dummy.img",
//     title : "T shirt",
//     ratings : "****",
//     sellingHistory : 75,
//     oldPrice : 59,
//     newPrice : 89,
// }

// console.log(product.title,product.ratings)

// snake case
// camel case

// const products = [
//     {
//         title : "Sauvage",
//         category : "perfume",
//         color : "black",
//         price : 45000,
//         stocks : 5
//     },
//     {
//         title : "T shirt",
//         category : "dressing",
//         color : "blue",
//         price : 15000,
//         stocks : 2
//     },
//     {
//         title : "Pant",
//         category : "dressing",
//         color : "white",
//         price : 12000,
//         stocks : 7
//     },
//     {
//         title : "Ndure Shoe",
//         category : "shoes",
//         color : "black",
//         price : 16000,
//         stocks : 7
//     }
// ]

// console.log(products[0].price, products[3].stocks)
// for
// for of, 
// for each
// map, filter, reduce

// for(let product of products){
//     console.log(product.title, product.price, product.category, product.stocks)
// }

// const newProducts = products.map((product)=>{
//     return product
// })

// console.log(newProducts)

// const total = products.filter(product => product.color === "black").map(fProduct => fProduct).reduce((acc,val)=> acc + val.price, 0)


// console.log(total)



const foods = [
    {
        name : "Pizza",
        price : 1500,
        quantity : 4,
        category : "Non veg"
    },
    {
        name : "Zinger",
        price : 800,
        quantity : 8,
        category : "Non veg"
    },
    {
        name : "Russian Salad",
        price : 1200,
        quantity : 3,
        category : "Veg"
    }
]

// console.log(foods[2])
// foods.map((food)=>{
//     console.log(food.name, food.price, food.quantity, food.category)
// })

// const total = foods.filter(food => food.category === "Non veg").map(fFood => fFood).reduce((acc, val) => acc + val.price, 0)
// console.log(total)