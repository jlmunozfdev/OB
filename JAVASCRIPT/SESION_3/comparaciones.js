/* COMPARACIONES */

//IGUALDAD

let a = 5;
console.log(typeof(a));
let b = '5';
console.log(typeof(b));

// == solo te compara el valor
// === te compara el valor y el tipo

if ( a == b ) {
    console.log('A es igual a B - Débil');
}

if ( a === b ) {
    console.log('A es igual a B - Fuerte');
}


/* DESIGUALDAD */

let c = 4;
let d = '10';


if ( c != d ) {
    console.log('C es diferente a D');
}

if ( c !== d ) {
    console.log('C es diferente a D');
}

/* MAYOR QUE Y MENOR QUE */

let max = 10;
let min = 5;

if ( max  > min ) {
    console.log('Max es mayor que min');
}

if ( max  >= min ) {
    console.log('Max es mayor que min');
}

if ( min  < max ) {
    console.log('Min es menor que max');
}

if ( min  <= max ) {
    console.log('Min es menor o igual que max');
}



