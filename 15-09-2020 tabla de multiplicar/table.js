function multiplicar() {
    let tabla = document.getElementById('multiplo').value;
    for (let i = 0; i < 10; i++) {
        document.write(""+tabla+" X "+i+" = "+(i*tabla)+"<br>");
    }
}
