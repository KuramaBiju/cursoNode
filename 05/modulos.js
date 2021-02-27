/* MODULO PATH */
const path = require('path'); /*Importo al modulo path, que maneja las URLs*/
console.log(path.basename(__filename));
console.log(path.join(__dirname, 'www', 'img', 'jpg')); /* Junta ubicaciones de paths de archivos, agregandole lo que queramos*/

/* MODULO UTIL */
const util = require('util');
let nombre = "Jero";
let apellido = "Ledesma";
const nomyape = util.format("Hola %s %s, un gusto", nombre, apellido);
console.log(nomyape);

/* MODULO V8 */

const v8 = require('v8');
console.log(v8.getHeapStatistics());