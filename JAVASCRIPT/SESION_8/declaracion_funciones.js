/* ¿Qué son las funciones, cómo se declaran y cómo se utilizan */

let nom = 'Jorge Luis'


function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}

saludar(nom);

let nombre_2 = 'Mateo'

function despedir(nombre) {
    nombre = 'Ale'
    console.log(`Adiós ${nombre}`);
}

despedir(nombre_2);


/*  */

let persona = {nombre: 'Juan', apellido: 'Gonzalez'}

function saludarPersona (objeto) {
    objeto.apellido = 'Villar'
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
}

saludarPersona(persona);

///////

function imprimeNumero (numero = 10){ //Parámetros por defecto
    console.log(numero);
}

imprimeNumero();

///////////

function imprimir(...parametros) {
    console.log(parametros);
};

imprimir(1, 2, 3, 5, 'hola');

///
function suma(...nums) {
   return nums.reduce((a,b) => a + b);
}

let s = suma(1, 2, 3, 4, 6, 89);

console.log(s);

//////////

function multiplicar (a = 0, b = 0) {
    return a * b;
}

console.log(multiplicar(4,9));



