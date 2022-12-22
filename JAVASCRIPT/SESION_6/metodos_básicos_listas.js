/* CÓMO TRABAJAR CON LISTAS (ARRAY, ARREGLOS, VECTORES) */
let var1 = 45;
let array = [1, 'hola', false, {id: 5}, null, undefined, var1];

console.log(array);

//Acceder a los valores de un Array a través de su posición

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);

/* Métodos para introducir nuevos valores en los arrays */
// push() .unshift() = Mutan el valor del array
//Valores al final ==> push
array.push('Ale', true, 200, 400);
console.log(array);

//Valores al principio
array.unshift('Inicio', 87, 99)
console.log(array);

//Métodos para eliminar valores del array
// .pop() .shift() ==> Mutan el valor del array

let array2 = [1, 3, 'hola', false];
//Valores al final --> Pop
array2.pop();
console.log(array2);

//Valores al inicio --> Shift
array2.shift();
console.log(array2);

/* Método para eliminar, modificar o añadir valores en nuestro array */
/* .splice(x, y, z) */
let array3 = [1, 2, 'hola', false];

//Eliminar valores
array3.splice(2, 1)
console.log(array3);

//Añadir valores
array3.splice(2, 0, 'Hola');
console.log(array3);

//modificar valores
array3.splice(2, 1, 'Jorge');
console.log(array3);