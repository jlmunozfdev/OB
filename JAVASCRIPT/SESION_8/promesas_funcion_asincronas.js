/* Funciones asíncronas y promesas */

function miAsinc() {
    //Hace una llamada a una BD externa
    //puede darnos algún error
}

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2)
    //Si está todo correcto
    if (i !== 0) {
        resolve();
    } else {
        reject();
    }
});

miPromesa
    .then(() => console.log("Se ha ejecutado de forma correcta"))
    .catch(() => console.log('Error'))
    .finally(() => console.log('Yo me ejecuto siempre'))