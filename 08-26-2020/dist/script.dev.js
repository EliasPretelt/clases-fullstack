"use strict";

//alert("hola todos");
function mensajeAlert() {
  alert("hola todos");
}

function boxtext() {
  var nombre = prompt('ingrese su nombre');
  document.write("<h1> su nombre es" + nombre + "</h1>");
}

function confitmar() {
  var respuesta = confirm("quiere eliminar?");

  if (respuesta == true) {
    alert("archivo eliminado");
  } else {
    alert("archivo no eliminado");
  }
}

function consola() {
  console.log("soy tu amigo para los errores");
}

var imagen = document.getElementById("img");
imagen.addEventListener("dblclick", function () {
  imagen.style.width = "900px";
  imagen.style.border = "5px solid black";
});
/* Mouse */

var boxCaja = document.getElementById("box");
/* document.getElementById("box").addEventListener("mouseenter", ()=>{
 box.classList.replace("box","cambio1")
}) */

/* mouseleave */

boxCaja.addEventListener("mouseenter", function () {
  boxCaja.classList.replace("box", "cambio1");
});
boxCaja.addEventListener("mouseleave", function () {
  /* El primer parametro es la clase existen o actual y el segundo parametro es la que lo va a remplazar  */
  boxCaja.classList.replace("cambio1", "box");
});
boxCaja.addEventListener("mousemove", function () {
  console.log("El mouse se esta moviendo");
});
boxCaja.addEventListener("mousedown", function () {
  console.log("Has dado click dentro del div");
});
boxCaja.addEventListener("mouseup", function () {
  console.log("Has levantado el click dentro del div");
});
var teclado = document.getElementById("teclado");
/*teclado.addEventListener("keydown", ()=>{
    console.log("tocaste una tecla");
})

teclado.addEventListener("keypress", ()=>{
    console.log("tienes totsh una tecla");
})*/

teclado.addEventListener("keyup", function (e) {
  console.log(e.key);

  if (e.key.toLowerCase() == "w") {
    alert("go");
  }
});
/* Objeto evento */

var padre = document.getElementById("padre");
padre.addEventListener("click", function (e) {
  console.log(e.target.textContent);
  /* e.target.style.background="red" */

  e.target.classList.add("color");
});
var uno = document.getElementById("uno");
uno.addEventListener("click", function (e) {
  e.target.classList.add("color1");
});
var dos = document.getElementById("dos");
dos.addEventListener("click", function (e) {
  e.target.classList.add("color2");
});
var tres = document.getElementById("tres");
tres.addEventListener("click", function (e) {
  e.target.classList.add("color3");
});
/* CREAR ELEMENTOS DENTRO DE UN NODO O ETIQUETA */

var lista = document.getElementById("lista");
var agregar = document.getElementById("agregar");
agregar.addEventListener("click", function () {
  var texto = document.getElementById("texto").value;
  /* Me trae el texto o informacion ingresado dentro del input */

  var etiqueta = document.createElement("li");
  /* CREO LA ETIQUETA */

  etiqueta.textContent = texto;
  /* ASIGNAMOS EL VALOR.DENTRO DE LA ETIQUE INSERTO EL TEXTO QUE TIENE EL INPUT */

  lista.appendChild(etiqueta);
  /* AGREGAMOS LA ETIQUETA A LA LISTA O NODO */
});