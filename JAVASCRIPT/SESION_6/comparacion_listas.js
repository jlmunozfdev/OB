/* Cómo podemos comparar listas */
// .every()

let array = [4, 5, ,3 , 7, -9, 12, 88, 2];

// let resultado = array.every(valor => {
//     if (valor > 0) {
//         return true;
//     } else {
//         return false;
//     }
// });

let resultado = array.every(valor => typeof valor === 'number');

console.log(resultado);

//Comparación de listas

let ar1 = [1, 2, 3, 4];
let ar2 = [1, 2, 3, 4];

console.log(ar1 === ar2);

let compararArrays = (array_1, array_2) => {
    if (array_1.length !== array_2.length) return false;
    let res = array_1.every((valor, i) => valor === array_2[i])
    return res;
}

console.log(compararArrays(ar1, ar2));

let ar3 = [1, 2, 3, 6];

console.log(compararArrays(ar1, ar3));