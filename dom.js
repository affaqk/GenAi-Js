// const heading = document.getElementById("head-1");
// heading.innerText = "I am learning js and html with dom"
// heading.style.color = "red"
// heading.style.backgroundColor = "green"
// heading.style.fontSize = "50px"
// console.log(heading)

// const heading = document.getElementsByClassName("heading-1");
// heading[0].innerText = "I am learning js and html with dom"
// heading[0].style.color = "red"
// heading[0].style.backgroundColor = "green"
// heading[0].style.fontSize = "50px"

// const heading = document.querySelector(".heading-1");
// heading.innerText = "I am learning js and html with dom"
// heading.style.color = "red"
// heading.style.backgroundColor = "green"
// heading.style.fontSize = "50px"

// const heading = document.querySelector(".heading-1")
// const red = document.querySelector(".red")
// const green = document.querySelector(".green")

// const changeRedColor = () => {
//     heading.style.color = "red";
//     heading.innerText = "I am red"
// }
// red.addEventListener("click", changeRedColor)
// green.addEventListener("click", ()=>{
//     heading.style.color = "green";
//     heading.innerText = "I am green"
// })

const body = document.querySelector("body");
const btn = document.querySelector(".change-color-btn")

const changeBackgroundColor = () => {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random()*255)
    let blue = Math.floor(Math.random()*255);
    console.log(red,green,blue)
    /* rgb(55,88,109) */
    let color = `rgb(${red},${green},${blue})`
    // console.log(color)
    body.style.backgroundColor = color
}

btn.addEventListener("click", ()=>{
    changeBackgroundColor()
})