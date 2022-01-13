// Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función
// Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los
// lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el
// número de apariciones de dicha suma, repitiendo 50 veces esta operación.

function dados(dado1,dado2) {
    return Math.floor(Math.random() * (7 - 1)) + 1;
    }


let dado1 = dados();
let dado2 = dados();
let sumaDados = dado1 + dado2;
console.log(dado1);
console.log(dado2);
document.write(sumaDados)


// TENGO QUE TERMINAR ESTE EJERCICIO!