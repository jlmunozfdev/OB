// Listas, array o arreglo
const lista = [1, 'Hola', true, undefined, null];
 console.log(lista[7]);

const lista2 = new Array (1, 'Hola', true, undefined, null);
console.log(lista2);


const lista3 = new Array(3);
lista3[0] = "Soy el primer elemento 0"

console.log(lista3);

const lista4 = [lista, lista2, lista3];
console.log(lista4);

// Objetos
const movil = {
    altura: 5,
    anchura: 10,
    marca: 'Xiaomi',
    isWhite: false,
    contactos: [
            'Jorge', 'Ale', 'Mateo'
    ],
    tarjeta: {
        marca: 'Sandisk',
        almacenamiento: 32
    },
    "color": 'black'
}

movil.anio = 2019;
movil.marca = 'Samsung'

console.log(movil.tarjeta.marca);
console.log(movil.anio);
console.log(movil.marca);

// Fechas
// Librerías de apoyo (Moment.js)

const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10); //Utilizando milisegundos
console.log(fecha_milis);

const fecha_cadena = new Date('febrery 25 2020');
console.log(fecha_cadena);

const fecha_valores =  new Date (2022, 0, 15);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const anio = ahora.getFullYear();

console.log(dia, mes, anio);

