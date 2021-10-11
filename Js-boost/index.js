const menu = document.getElementById("index.js-desplegar menu")
const navCel = document.getElementById("index.js-desplegable")
let desplegado = false

menu.addEventListener("click", e=>{
    console.log("hola")
    if(desplegado){
        navCel.style.display = ""
        desplegado = false
    }else {
        navCel.style.display = "block"
        desplegado = true
    }
})