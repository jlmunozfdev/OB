//Cómo obtener una lista a partir de otra .slice()
let array = ['Hola', 1, 2, 3, true, null, 'adios'];

//NO MODIFICA EL VALOR DEL ARRAY ORIGINAL
console.log(array.slice(1, 4));
let array2 = array.slice(2, 5);
console.log(array2);

let array3 = array.slice(2, -2);
console.log(array3);