"use strict";

/* Metodo para mostrar mensajes */
function mensajeAlert() {
  alert("Hola mundooo!!!");
}
/* Prompt */


function cajitaDeTexto() {
  var nombre = prompt('Ingrese su nombre');
  document.write("<h1> Su nombre es " + nombre + "</h1>");
}
/* Confirm */


function confirmar() {
  var respuesta = confirm('Esta seguro que dese eliminar el archivo?');

  if (respuesta) {
    alert("Archivo eliminado correctamente!!");
  } else {
    alert("Archivo NO eliminado");
  }
}

function consola() {
  console.log("Soy tu mejor amigo para los errores");
}
/* imagen.addEventListener("click", funtion(){

}) */


var imagen = document.getElementById("imagen");
imagen.addEventListener("dblclick", function () {
  /* alert("Soy el DOM"); */

  /* Modificamos el CSS */
  imagen.style.width = "1000px";
  imagen.style.border = "5px solid black";
});
/* Mouse */

var boxCaja = document.getElementById("box");
/* document.getElementById("box").addEventListener("mouseenter", ()=>{
 box.classList.replace("box","cambio1")
}) */

/* mouseleave */

boxCaja.addEventListener("mouseenter", function () {
  boxCaja.classList.replace("boxcam", "cambio1");
});
boxCaja.addEventListener("mouseleave", function () {
  boxCaja.classList.replace("cambio1", "boxcam");
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
/* TECLADO */

var teclado = document.getElementById("teclado");
/* teclado.addEventListener("keydown", ()=>{
    console.log("Has oprimido una tecla")
})
teclado.addEventListener("keypress", ()=>{
    alert("Tienes la tecla sostenida");
})  */

teclado.addEventListener("keyup", function (e) {
  console.log(e.key);

  if (e.key.toLowerCase() == "w") {
    alert("Vas hacia adelante");
  }
});
/* Objeto evento */

var padre = document.getElementById("padre");
padre.addEventListener("click", function (e) {
  console.log(e.target.textContent);
  /* e.target.style.background="red" */

  e.target.classList.add("color");
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