/* Casos específicos - break, continue */
let list = [ 
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
];

for ( let i = 0; i < list.length; i++) {

    if (list[i] === 3) {
        continue;
    }

    console.log(list[i]);
    
    if (list[i] > 5){
        break;
    }
}



/* Cuál es el ámvbito de un bucle*/

console.log(i);