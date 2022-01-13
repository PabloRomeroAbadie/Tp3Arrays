// Definir una función que muestre información sobre una cadena de texto que se le pasa
// como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena
// está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function infoCadena(argumento){
    if(argumento == argumento.toUpperCase()) {
         document.write(" la cadena está formada sólo por mayúsculas");
      }
      else if(argumento == argumento.toLowerCase()) {
        document.write(" la cadena está formada sólo por minusculas");
      }
      else {
        document.write(" la cadena está formada por mayusculas y minusculas");;
      }
    
      return;
    }

let argumento = prompt("ingrese cadena de texto en mayuscula, minuscula o mezcla de ambos");
infoCadena(argumento);