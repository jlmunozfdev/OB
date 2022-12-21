/* Métodos en Expresiones regulares */
// https://regexr.com

let texto_largo = 'Los chicos están bien, pero los chicos están mal. Cuando los hombres hacen algo malo, las mujeres los recriminan.'

console.log(texto_largo.match(/los/g));

/* Si existe la palabra dentro del texto */
console.log(texto_largo.includes('chicos'));

/* Saber si un texto empieza con una palabra */
console.log(texto_largo.startsWith('Los'));
/* Saber si un texto termina con una palabra */
console.log(texto_largo.endsWith('recriminan.'));