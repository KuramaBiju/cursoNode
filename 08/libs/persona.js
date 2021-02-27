 /*Acá creamos nuestra propia clase para llamarlo y rehusarlo*/
 const eventEmitter = require('events').EventEmitter;

 const util = require('util');

 let Person = function(nombre) {
     this.nombre = nombre;
 }
 util.inherits(Person, eventEmitter);

 /*Para exportar o crear un modulo , ahora lo puedo incluir en otro lado */
 module.exports = Person;