function devuelve (){
        return true;
};

console.log(devuelve());

async function holaPromesa(){
    return setTimeout(() => console.log('Hola soy una promesa'), 5000);
}

holaPromesa();


function* indicesAutoma() {
    let id = 0;
    while(true) {
        yield id = id + 2;
    }
}

let gen = indicesAutoma();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);