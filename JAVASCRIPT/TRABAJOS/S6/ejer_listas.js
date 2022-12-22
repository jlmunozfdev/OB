let listaCompra = [ 'Ajo', 'Tomate', 'Arandano', 'Coliflor', 'Mango' ];

listaCompra.splice(5, 0, 'Aceite de Girasol');
console.log(listaCompra);

listaCompra.splice(5, 1);
console.log(listaCompra);

let objPelis = [
    { titulo: 'Avengers', director: 'Mateo Muñoz', fecha: new Date (2002, 9, 29)},
    { titulo: 'Terminator', director: 'Alejandra Orozco', fecha: new Date (1990, 10, 1)},
    { titulo: 'Pitufo', director: 'Patricia Chumbe', fecha: new Date (1993, 8, 15)}
];

let peliculas = objPelis.filter(objPelis => objPelis.fecha > new Date (2010, 0, 1));
console.log(objPelis);

let direcOri = objPelis.map(objPelis => objPelis.director);
console.log(direcOri);

let tituOri = objPelis.map(objPelis => objPelis.titulo);
console.log(tituOri);



let direc_titu = direcOri.concat(tituOri);
console.log(direc_titu);

let direc_titu_propa = [...direcOri, ...tituOri];
console.log(direc_titu_propa);