// Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y
// almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor “0” se
// debe mostrar el arreglo generado, luego realizar las siguientes acciones:
// ● Mostrar la longitud del arreglo.
// ● Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// ● Añade en última posición la ciudad de París.
// ● Escribe por pantalla el elemento que ocupa la segunda posición.
// ● Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

let cadena = prompt("ingrese nombre de ciudades separadas por una coma")
let ciudades = cadena.split(",");

//mostrar longitud del arreglo
console.log(ciudades)
console.log(ciudades.length)

//posicion primera,tercera y ultima
document.write("Posicion Primera, Tercera y ultima")
document.write("<br>"+ciudades[0])
document.write("<br>"+ ciudades[2])
document.write("<br>"+ ciudades[ciudades.length-1])

//añade en ultima posicion la ciudad de Paris
ciudades.push("París")

// Escribe por pantalla el elemento que ocupa la segunda posición.
document.write("<br><br>Elemento que ocupa la segunda posicion<br>"+ ciudades[1])

//sustituya el elemento que ocupa la segunda posicion por la ciudad de Barcelona
ciudades [1] = "Barcelona"




