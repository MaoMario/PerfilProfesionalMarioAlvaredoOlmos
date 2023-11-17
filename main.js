//Practica 1
var msg = "hola mundo"
console.log("hola mundo");
document.addEventListener("DOMContentLoaded", init)

function init(  ){
    let tittle = document.getElementById("tittle")
tittle.style.color = "red"
tittle.innerHTML = msg
loadData("data.json")
}
function loadData(url) {
let json
 fetch(url)
    .then(Response => Response.json())
    .then(data =>  pintaMisHobbies(data))
       
    }

function pintaMisHobbies(json) {
        console.log(json)
}