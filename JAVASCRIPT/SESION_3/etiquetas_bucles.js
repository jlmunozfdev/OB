/* break y continue */
/* labels */

let unidades = 0;
let decenas = 0;

bucleDecenas:while (true) {
    bucleUnidades:while (true) {
        console.log(`El número actual es: ${decenas} ${unidades}`);
        unidades = unidades + 1;
        if ( unidades === 10 ) {
            unidades = 0;
            break bucleUnidades;
        }
        if ( decenas === 2 ) {
            break bucleDecenas;
        }
    }
    decenas = decenas + 1;
}

console.log('Ya hemos terminado');