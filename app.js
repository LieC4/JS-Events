/*1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click

1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.*/

//1.1

let body = document.querySelector("body");

let elbutton = document.createElement("button");

elbutton.innerHTML="Haz click!";

elbutton.id = "btnToClick";

body.appendChild(elbutton);

console.log(elbutton);

elbutton.addEventListener("click",(e) => {
        console.log(e);
} );

/*function clickar(event){
    console.log(event)
}

elbutton.onclick = clickar;*/



//1.2

const etiquetafocus = document.querySelector(".focus");
console.log(etiquetafocus);

/*function enfocar () {
    console.log(etiquetafocus.value)
}
etiquetafocus.focus = enfocar;*/

etiquetafocus.addEventListener("focus", (o) => {
    console.log(o);
});


//1.3

const etiquetainput = document.querySelector(".value");
console.log(etiquetainput);

/*function meter (){
    console.log(etiquetainput.value)
}

etiquetainput.oninput = meter;*/

etiquetainput.addEventListener("input", (u) => {
    console.log(u);
});