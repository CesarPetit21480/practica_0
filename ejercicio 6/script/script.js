/* 6 - Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo:  
input: 15 , 3
*/

let nro1 = parseInt(prompt("Ingrese un número: "));
let nro2 = parseInt(prompt("Ingrese otro número: "));

if (nro1 > nro2) {
    console.log("El número mayor es: " + nro1);
} else if (nro1 < nro2) {
    console.log("El número mayor es: " + nro2);
} else {
    console.log("Los números son iguales.");
}