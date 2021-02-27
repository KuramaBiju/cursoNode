const eventEmitter = require('events').EventEmitter; /*Hago referencia a toda la clase */
const util = require('util');

let Person = function(nombre) {
    this.nombre = nombre;
}
util.inherits(Person, eventEmitter); /*Le pasamos nuestro objeto y el objeto de donde va a heredar*/
let persona = new Person('Jero');

persona.on('hablar', (msg) => {
    console.log(`${persona.nombre} : ${msg}`);
});
/* No estoy utilizando el objeto emmiter, ahora uso el objeto persona que esta heredando el eventEmitter*/

persona.emit('hablar', 'Hoy es un gran día');