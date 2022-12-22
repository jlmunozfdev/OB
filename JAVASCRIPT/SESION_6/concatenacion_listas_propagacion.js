/* Cómo unir dos listas */
// .concat

let lista1 = ['Hola', 2, false, null];
let lista2 = ['adiós', true, undefined];

console.log(lista1.concat(lista2));

let lista3 = lista1.concat(lista2);
console.log(lista3);

//Cómo unir dos listas con el factor de propagación
console.log(...lista3);

let lista4 = [...lista1, ...lista2];
console.log(lista4);


