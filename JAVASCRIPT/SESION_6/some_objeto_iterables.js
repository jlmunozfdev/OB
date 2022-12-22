/* .some() */

let array = [3, 4, 5, 6, 10, 500, 343, -2];

let res = array.some(valor => valor < 0);

console.log(res);

let existe = array.some(valor => valor === 4);

console.log(existe);

let listaObjetos= [
    {nombre: 'Jorge', edad: 36},
    {nombre: 'Mateo', edad: 4},
    {nombre: 'Ale', edad: 32},
    {nombre: 'Juliana', edad: 35},
    {nombre: 'Tatiana', edad: 27}
];

let existePersona = listaObjetos.some(persona => persona.nombre === 'Mateo');
console.log(existePersona);


//Cómo obtener una lista a partir de unobjeto iterable
let str = 'Hola soy Jorge';
console.log(str[0]);

let ar_str = Array.from(str);
console.log(ar_str);

let set = new Set([2, 3, 'hola', 4]);
let ar_set = Array.from(set);

console.log(ar_set);


let keys = array.keys();
console.log(keys);

let ar_keys = Array.from(keys);
console.log(ar_keys);