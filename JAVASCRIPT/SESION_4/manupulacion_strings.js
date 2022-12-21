/* Métodos de cadenas de texto */

let input = 'Virgo';
let db = 'virgo';

console.log(input === db);

/* toLowerCase()  - toUpperCase()*/

console.log(input.toLowerCase());
console.log(input.toUpperCase());
console.log(input.toLowerCase() === db.toLowerCase());
console.log(input.toUpperCase() === db.toUpperCase());

/* Formas de concatenar dos cadenas de caracteres */
let str_1 = "Cadena uno ";
let str_2 = "y yo soy la cadena dos.";

console.log(str_1.concat(str_2));
console.log(str_1 + str_2);
console.log(`${str_1} ${str_2}`);

/* Eliminar espacios al inicio y al final */
let str_3 = "      Hola soy un string con espacios al final.           ";
console.log(str_3.length);
//trim()

console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

/* Obtener la letra que hay en cierta posición */
let str_4 = "Hola soy el string número cuatro";

console.log(str_4.charAt(3));
console.log(str_4[3]);

/* Obtener la posición de una palabra dentro de una cadena de caracteres */
let str_5 = "Hola soy Jorge y me gusta el frontend. Jorge es mi nombre.";

console.log(str_5.indexOf('Jorge'));
console.log(str_5.charAt(9));
console.log(str_5.lastIndexOf('Jorge'));