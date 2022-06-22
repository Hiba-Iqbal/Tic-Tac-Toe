var navBar = document.querySelector(".navBar")
var ticTac = document.querySelector(".title")
var Loader = document.querySelector("#loader")
var Begin = document.querySelector(".Begin")


function toggleButton(){
    navBar.classList.toggle('active')
}

ticTac.classList.toggle('fadein')

function load(){
    Loader.style.display = 'none';
}
