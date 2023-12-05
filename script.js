/* let node = document.createElement("h1")

let nodeText = document.createTextNode("Hallo from Js")

node.appendChild(nodeText)


document.querySelector(".JsInPut").appendChild(node)

console.log(document.querySelector("body"))



// Tab Toggel with textContent and Includes 

function showElement(){
    let content  = document.querySelectorAll(".toogle")

    for(i of content){
        if(i.textContent.includes(this.textContent)){
            i.style.display ="block"
        }else{
            i.style.display ="none"
        }
    
    }
    console.log(this.textContent)
}

 */

// Tab toggle with Array from adn indexOf

let cities = document.querySelectorAll(".tab_1");


cities.forEach(e=>e.addEventListener("click", showElement))




function showElement(){
    let arr = Array.from(cities)
    let content = document.querySelectorAll(".toogle")
    content.forEach(e=>e.style.display = "none")
    content[arr.indexOf(this)].style.display = "block"
    //console.log(arr.indexOf(this))
}




//accordion FAQ

let listItem =  document.querySelectorAll(".listTitle")
listItem.forEach(e=>e.addEventListener("click", showAccordion))

let accordionContent = document.querySelectorAll("li p")
accordionContent.forEach(e=>e.style.display="none")

function showAccordion(){

    if(this.nextElementSibling.style.display == "none"){
        this.nextElementSibling.style.display = "block";
        this.childNodes[1].textContent = "-"
        console.log(this.childNodes[1])

    }else if(this.nextElementSibling.style.display !== "none"){
        this.nextElementSibling.style.display = "none"
        this.childNodes[1].textContent = "+"
    }
    
}



let navButtons = document.querySelectorAll(".navbar a")

console.log(navButtons)
navButtons.forEach(e=>e.addEventListener("mouseenter",focus ))

navButtons.forEach(e=>e.addEventListener("mouseleave",leave ))


function focus(){
    this.style.backgroundColor = "#ffffff";
   
    this.style.color ="#ff0000"
}

function leave (){
    this.style.backgroundColor = "red";
    this.style.color ="white"
}


// document.querySelector(".nav_right").style.display = "none"
// document.querySelector("#hamburger").style.display = "none"

// let hamburger = document.querySelector(".hamburgerMenu")

// hamburger.addEventListener("click", displayMenu)

// function displayMenu(){
//    let content = document.querySelector("#hamburger")
//    content.classList.remove("nav_hamburger")
//     content.classList.add("nav_hamburger_show")

// }

