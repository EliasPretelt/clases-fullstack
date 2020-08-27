/* CONDICIONALES- Grupo de instrucciones que se pueden ejecutar o no en funccion del valor de una condicion */

var color = prompt("Ingrese un color en INGLES!!");

/* Para que la comprobacion no tenga margenes de error por mayusculas o minusculas podemos utilizar los siguientes metodos: toLowerCase */

var minuscula= color.toLocaleLowerCase();

if (minuscula== "blue") {
    document.write("<h1 style= 'color: blue'> Si el color es " + color + "<h1>")
} else {
   document.write("<h1 style= 'color:" + color + "';> No el color NO es Azul, el color ingresado es: " + color + "<h1>" ) 
}

/* OPERADORES DE COMPARACION
== IGUAL
=== ESTRICTAMENTE IGUAL- TIENEN QUE SER EL MISMO TIPO DE DATO
!= DISTINTO O DIFERENTE
!== NO IDENTICO
< MENOR QUE
<= MENOR O IGUAL QUE
> MAYOR QUE
>= MAYOR IGUAL QUE*/

/* != DISTINTO O DIFERENTE */

var year= prompt("Ingrese el año actual")

/* Si el año es diferente a 2020, se ejecutara el bloque de codigo.  */
if (year!=2020) {
    document.write(" Este es un año diferente a 2020, el año digitado fue: " + year + "<br>")
    
} else {
    document.write("Si este es el año 2020 <br>")
}


/* SI ANIDADO- MAYOR-MENOR IGUAL QUE */
var edad= prompt("Ingrese su edad")
edad= parseInt(edad) /* Convertimos a entero */

if (edad<=18) {
    document.write("Usted es menor de edad, un niño o adolescente! Tiene " + edad + "años")
} else if(edad>59){
    document.write("Usted pertenece al grupo de la tercera edad! Tiene " + edad + " años")
} else{
    document.write("Usted es un adulto! Tiene " + edad + " años")
}

/* OPERADORES LOGICOS
&& AND Y
|| OR Ó
! NOT- Negacion, Que no se cumpla algo */


/* OR || */
var pais= prompt("Ingresa tu país!")
var pais2= pais.toLocaleLowerCase(); /* Pasamos a minuscula */

if (pais2 == "colombia" || pais2 == "peru" || pais2 == "mexico") {
    document.write("<br> Tu pais es " + pais + " y hablan español")
} else {
    document.write("<br> No tu pais no habla español, que idioma hablan en: " + pais + "?")
}

/* AND && */

var notaFinal= prompt("Ingrese su nota final")
notaFinal= parseFloat(notaFinal) /* Convertimos a decimal */
if (notaFinal<= 0 && notaFinal<=2.9) {
    document.write("<br> Ha reprobado la asignatura :(")
} else if(notaFinal>=3 && notaFinal<=5) {
    document.write(" <br> Excelente!! Ha aprobado la asignatura")
}else{
    alert("<br> Por favor ingrese un numero en el rango de 0 a 5")
}

/* ! NOT */


var online= true;

/* !true= false. Si no es true, debe ser false*/
if (online = !true) {
    document.write("<br>El usuario no esta conectado")
} else {
    document.write("<br>El usuario esta conectado")
}