// Escribir el código de una función a la que se pasa como parámetro un número entero y
// devuelve como resultado una cadena de texto que indica si el número es par o impar.
// Mostrar por pantalla el resultado devuelto por la función.

function parImpar (numeroEntero){
    if ((numeroEntero % 2 === 0))
     document.write ("el numero es par")
    else
     document.write ("el numero es impar")
}

let numeroEntero = prompt("ingrese un numero entero");
parImpar(numeroEntero);