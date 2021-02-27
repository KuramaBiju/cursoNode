/* 
Para mandar a llamar al modulo creado
*/
const persona = require('./libs/persona');

let jeronimo = new persona('JeriToK');

jeronimo.on('habla', (msg) => {
    console.log(`${jeronimo.nombre}: ${msg}`);
});

jeronimo.emit('habla', 'Hoy va a ser un gran day');