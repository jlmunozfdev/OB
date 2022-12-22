let datosPersonales = {
    nombre: 'Jorge Luis',
    apellidos: 'Muñoz Fernandez',
    edad: 36,
    altura: 1.64,
    isDeveloper: true
};

let obtEdad = datosPersonales.edad;
console.log(obtEdad);





let unirListas = [{
                    ...datosPersonales}, 
                    {nombre: 'Juliana', apellido: 'Montilla', edad: 34},
                    {nombre: 'Paco', apellido: 'Chincha', edad: 28}
];
console.log(unirListas);

let ordEdad = unirListas.sort((a,b) => b.edad - a.edad);
console.log(ordEdad);

