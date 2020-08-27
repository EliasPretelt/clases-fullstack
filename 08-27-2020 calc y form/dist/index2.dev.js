"use strict";

var promedio = document.getElementById("promedio");
var respuesta = document.getElementById("respuesta");
promedio.addEventListener("click", function () {
  var num1 = parseFloat(document.getElementById("num1")).value;
  var num2 = parseFloat(document.getElementById("num2")).value;
  var num3 = parseFloat(document.getElementById("num3")).value;
  var resultado = (num1 + num2 + num3) / 3;
  respuesta.innerHTML = "<i>" + resultado + "</i>";
});