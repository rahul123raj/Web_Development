// let myfun = (event) =>{
//     console.log("myfun( is executed")
//     console.log(event.target.innerText)
//     console.log(event)
//     event.target.style.border = "3px solid brown"
//     event.target.style.backgroundcolor= "red"
// }

let inputElem = document.getElementById("username")
inputElem.addEventListener("focus",()=>{
    console.log("input executed")
    inputElem.style.backgroundColor = "yellow"
})

let myFun = () => {
    console.log("executed")
    
}

 inputElem = document.getElementById("username")
inputElem.addEventListener("blur",()=>{
    console.log("exccuted")
    inputElem.style.backgroundColor = "silver"
})

let selectElem = document.getElementById("sub")
selectElem.addEventListener("change",(e)=>{
    console.log("change executed")
    console.log(`user selected ${e.target.value}`)
    // if()
})

let formElem = document.getElementById("form1")
formElem.addEventListener("submit",(e)=>{
    // e.preventDefault()
    alert("form submitted")
    e.preventDefault()
})
