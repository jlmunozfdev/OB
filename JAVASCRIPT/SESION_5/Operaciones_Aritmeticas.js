/* Principales Operaciones Aritmétricas */
let a = 3.5;
let b = 4.8;

//SUMA
suma = a + b;
console.log(suma);
//RESTA
resta = a - b;
console.log(resta);
//MULTIPLICACIÓN
multiplicacion = a * b;
console.log(multiplicacion);
// DIVISION
division = a / b;
console.log(division);



/* Representación de los números en cadernas de texto */

console.log( typeof a);
let a_s = a.toString();

console.log(a_s);
console.log(typeof a_s);


/* Redondeo de números decimales */
let c  = 3.3;
let d = c * 3;

console.log(d);
console.log(typeof d);

//toFixed(x) - Limita el número de decimales al valor x
console.log(d.toFixed(2));
console.log(typeof d.toFixed(2));

let e = 1893.98009;
let f = 1909844040;

console.log(e.toFixed(2));
console.log(f.toFixed(2));



//toPrecision(x) - Limita el número de cifras significativas
console.log(e.toPrecision(7));
console.log(f.toPrecision(7));
console.log(typeof e.toPrecision(7));
