/*9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:
 
input: Hola mundo
Output: oauo 
*/

let frase = prompt("Ingrese una frase:");
frase = frase.toUpperCase();
let cantidad = frase.length;
let vocales = "";


for (let i = 0; i < cantidad; i++) {

    letra = frase.charAt(i);

    if (letra === "A" || letra === "E" || letra === "I" || letra === "O" || letra === "U") {
        vocales += letra;
    }
}

alert(vocales);
