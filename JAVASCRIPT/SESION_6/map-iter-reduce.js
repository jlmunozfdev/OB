//Trabajar con métodos más avanzados
// .map() .filter() .reduce()


let array = ['Rioja', 'Lima', 'Cusco', 'Arequipa', 'Puno'];

let val = array.forEach(v => {
    console.log(v);
    return 4;
});

console.log(val);

let newArray = array.map((valor, indice) =>  ` ${indice + 1} - ${valor}`);
console.log(newArray);


let arrayObj = [
    {nombre: 'Jorge', edad: 36},
    {nombre: 'Mateo', edad: 4},
    {nombre: 'Ale', edad: 32},
    {nombre: 'Juliana', edad: 35},
    {nombre: 'Tatiana', edad: 27}
];

/* let personasMayores = arrayObj.filter(obj => {
    if ( obj.edad > 30 ) {
        return true;
    }else {
        return false;
    }
}); */

let personasMayores = arrayObj.filter(obj => obj.edad >30);
console.log(personasMayores);

let nuevaLista = arrayObj.filter(obj => obj.nombre !== 'Juliana');
console.log(nuevaLista);

let valores = [3, 56, 23, 5, 90, 100];
let suma = valores.reduce((acumulado, cur, i , arrayOriginal) => {
    console.log(acumulado);
    console.log(cur);
    console.log(i);
    console.log(arrayOriginal);
    return acumulado + cur;
});

console.log(suma);