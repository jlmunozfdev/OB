/* Existen 3 formas */

var variableVar;
let variableLet;

const constantesConst = '';

/* Var */

var a = 1;
console.log(a);
console.log(typeof(a));

a = 5;
console.log(a);

/* Let */

let b = 3;
console.log(b);

b = 5;
console.log(b);

/* Constante */

const saludo = 'Hola soy una constante';
console.log(saludo);


/* Diferencias */
/* Var afecta a todo el código y Let al bloque donde se ha declarado */

var variable =  "Hola soy una variable VAR"

for( var i = 0;  i < 3; i++)  {
    var variable = "Soy la segunda variable"
}

console.log(variable);
console.log(typeof(variable));

/* ---------------------------- */
var soyLet =  "Hola soy una variable LET"

for( let i = 0;  i < 3; i++)  {
    let soyLet = "Soy la segunda variable LET"
}

console.log(soyLet);

console.log(typeof(soyLet))