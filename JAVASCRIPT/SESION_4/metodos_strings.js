/* Meétodos más utilizados con cadenas de caracteres */

//Obtener la longitud de un string

let str = 'Hola soy un string';
console.log(str.length);

//Obtener partes de cadenas de caracteres
//slice() substring() substr()

let slice_str = str.slice(0, 10);
console.log(slice_str);

let substring_str = str.substring(0, 10);
console.log(substring_str);

let substr_str = str.substr(0, 10);
console.log(substr_str);

//Reemplazar parte del contenido de un texto
let cadena = 'Hola soy Jorge';
console.log(cadena);


/* Al utilizar strings solo reemplaza la primera instancia */
console.log(cadena.replace('Jorge', 'Mateo'));

let texto_largo = 'Los chicos están bien, pero los chicos están mal. Cuando los hombres hacen algo malo, las mujeres los recriminan.'
/* Al utilizar strings solo reemplaza la primera instancia */
console.log(texto_largo.replace('los' , 'cinco'));

/* Al utilizar la expresión regular /g (global) reemplaza todas las instancias */
console.log(texto_largo.replace(/los/g, 'cinco'));
