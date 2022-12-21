/* BUCLES FOR */

/* i = i + i 
i += 1
i++ */

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let list = [
    1,
    4,
    6,
    2,
    3,
    7,
    10,
    12
];

for(let i = 0; i < list.length; i++) {
    console.log(list[i] * 2);
}

/* ESTRUCTURA FOR OF */

for (let valor of list) {
    console.log(valor);
}

/* ESTRUCTURA FOR EACH */

list.forEach(valor => {
    console.log(valor);
});

/* ESTRUCTURA FOR IN */

let persona = {
    nombre: 'Jorge',
    apellido: 'Muñoz',
    edad: 36,
    isDeveloper: true
}

for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}

let prop = 'edad';
console.log(persona[prop]);