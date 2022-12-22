/* Cómo ordenar arrays .sort()    */
let array = [2, 5, 9, 15, 1, 2, 0, 4];
console.log(array);

array.sort(( a, b ) => {
    if (a < b){
        return - 1;
    } else {
        return + 1;
    }
});

console.log(array);

//Ordenar únicamente array numéricos
let arrayNumeros = [ 4, 7, 3, 12, 99, 14, 19];
arrayNumeros.sort((a, b) => a - b);

console.log(arrayNumeros);

//Interesante en arrays de objetos
let listaObjetos = [
    {nombre: 'Jorge', edad: 36},
    {nombre: 'Mateo', edad: 4},
    {nombre: 'Ale', edad: 32},
    {nombre: 'Juliana', edad: 35},
    {nombre: 'Tatiana', edad: 27}
];

// listaObjetos.sort((a, b) => {
//     if (a.edad < b.edad){
//         return - 1;
//     } else {
//         return + 1;
//     }
// });

listaObjetos.sort((a, b) => a.edad - b.edad );
console.log(listaObjetos);