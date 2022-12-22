let fechaActual = new Date();
console.log(fechaActual);

let fechaNac = new Date(1986, 8, 18);
console.log(fechaNac);

let hoyEsTarde = (fechaActual > fechaNac);
console.log(hoyEsTarde);

let diaNac = new Date(1986, 8, 18);
console.log(diaNac.getDate());

let mesNac = new Date(1986, 8, 18);
console.log(mesNac.getMonth() + 1);

let anioNac = new Date(1986, 8, 18);
console.log(anioNac.getFullYear());
