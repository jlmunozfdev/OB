/* Funciones generadoras */

function* generarId(){
    let id = 0;
    while(true) {
        id++;
        if (id === 10){
            return id;
        }
        yield id;
    }
}

let gen = generarId();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);