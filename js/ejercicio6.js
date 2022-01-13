// Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego
// crear una función para calcular su perímetro y mostrarlo por pantalla.
// La fórmula del perímetro es p = 2*(a +b)

let altura = parseInt(prompt("ingrese el valor de la altura del rectangulo"))
let base = parseInt(prompt("ingrese el valor de la base del rectangulo"))

function resultadoPerimetro(altura,base){
    return  2 * (altura + base);
}

document.write("el perimetro del rectangulo es: "+resultadoPerimetro(altura,base))