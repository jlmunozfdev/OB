/* Sets o conjuntos */
let array = [1, 2, 3, 4, 5, 6, 1, 2, 'hola', {id: 5}];

//console.log({id:5} === {id:5});

let miSet = new Set(array);
console.log(array);
console.log(miSet);

// .add()

miSet.add(9);
console.log(miSet);

miSet.add('Jorge');
console.log(miSet);

// .delete
miSet.delete('hola');
console.log(miSet);

// .clear
// miSet.clear();
// console.log(miSet);

// .has()
console.log(miSet.has(40));

//.size
console.log(miSet.size);

miSet.forEach(valor => {
    console.log(valor);
});

let ir_miSet = miSet.values();
console.log(ir_miSet);

let ar_miSet = [...miSet];
console.log(ar_miSet);
