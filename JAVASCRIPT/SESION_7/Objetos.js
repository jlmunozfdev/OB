/* Trabajando con Obejtos */

let obj = {
    id: 4,
    nombre: 'Juan',
    apellido: 'Gonzalez',
    isDeveloper: true,
    libros_favoritos: ['Los amorosos', 'La tregua'],
    '4-juegos': [1, 2, 4, 4]
};
console.log(obj["4-juegos"]);
console.log(obj.apellido);

let prop = 'isDeveloper';
console.log(obj[prop]);

let obj2 = obj;
console.log(obj2);

obj2.nombre = 'Mateo';
console.log(obj2);
console.log(obj.nombre);

let val1 = 4;
let val2 = val1;

val2 = 6;

console.log(val1);
console.log(val2);


let obj3 = {...obj};
console.log(obj.nombre);
console.log(obj3.nombre);

obj3.nombre = 'Ale';

console.log(obj.nombre);
console.log(obj3.nombre);

//Cómo ordenar listas de objetos en función de una propiedad

let listaPeliculas = [
    {titulo: 'Lo que el viento se llevó', anio: 1939},
    {titulo: 'titanic', anio: 1997},
    {titulo: 'Moana', anio: 2016},
    {titulo: 'El efecrto mariposa', anio: 2004},
    {titulo: 'TED', anio: 2012}
];

console.log(listaPeliculas);

// .sort()

let ordenar_anio =  listaPeliculas.sort((a, b) => a.anio - b.anio);
console.log(ordenar_anio);



