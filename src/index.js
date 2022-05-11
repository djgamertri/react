import ReactDOM from "react-dom";
import App from "./App"
import "./index.css"


ReactDOM.render(<App />, document.getElementById("root"))
/*
var btn = document.getElementById("btn-menu");
var nav = document.getElementById("nav");
var content = document.getElementById("content");

//navegacion

btn.onclick = function(){
    if(nav.style.left == "0px"){
        nav.style.left = "-345px"
        content.style.marginLeft = "0px";
    }
    else{
        nav.style.left = "0px"
        content.style.marginLeft = "345px";
    }
}

*/
// observer 

const img0 = document.getElementById("imagen0");
const img1 = document.getElementById("imagen1");
const img2 = document.getElementById("imagen2");
const img3 = document.getElementById("imagen3");
const img4 = document.getElementById("imagen4");

const LoadImage = (entradas, observador) => { 

    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add("visible")
        }
    });
}

const observador = new IntersectionObserver(LoadImage, {
    root: null, 
    rootMargin: "0px 0px 0px 0px",
    threshold: 1.0
});

observador.observe(img0);
observador.observe(img1); 
observador.observe(img2);
observador.observe(img3); 
observador.observe(img4);
