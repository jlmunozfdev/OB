let fecha = new Date()

console.log(fecha);

//Los meses inician en 0(ENERO)
let fecha2 = new Date(1986, 8, 18, 1, 23, 52, 200);
console.log(fecha2);

let fecha3 = new Date(-20000000000000);//milisegundos
console.log(fecha3);

let fecha4 = new Date('October 13, 1974 12:15:15');
console.log(fecha4);


console.log(fecha < fecha2);

let fecha5 = new Date(1986, 8, 18, 1, 23, 52, 200);
console.log(fecha2 === fecha5); //ERROR - no se pueden comparar fechas de esta manera

console.log(fecha2.getTime() === fecha5.getTime()); //Forma correcta de comparar fechas

//Obtener el día, el mes y el año de una fecha.

//Obtener día
console.log(fecha2.getDay());

//Obtener el mes
console.log(fecha2.getMonth() + 1);

//Obtener el año
console.log(fecha2.getFullYear());

//Mostrar una fecha en un string
console.log(fecha2);

//.toLocaleDateString
//
console.log(fecha2.toLocaleDateString('en-US'));

