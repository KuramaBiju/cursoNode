const readline = require('readline'); /*Permite realizar la manipulacion sencilla de los outputs y intpus*/
const util = require('util');
const rl = readline.createInterface(process.stdin, process.stdout);
/*Creamos una interfaz en el modulo que permite mapear 2 procesos. Se puede especificar como objeto o con parametros. 
Crea la interface y recibe los inputs e outputs de los procesos.*/
const persona = {
    nombre: '',
    comentarios: []
};
rl.question('Como te llamas tu = ', (respuesta) => { /*Permite solicitar 1 input y escribir un output */
    persona.nombre = respuesta;
    rl.setPrompt('Dime un comentario: '); /*Te permite escribir un otput pero este mensaje no se escribe en la consola hasta que no usemos la función prompt */
    rl.prompt();

});

rl.on('line', (input) => { /* Me permite ejecutar un evento, como line cada vez que se escribe información o se recibe un fin de linea se ejecuta */
    if (input.trim() === 'salir') {
        const mensaje = util.format("Te llamas %s y esto comentaste %j", persona.nombre, persona.comentarios);
        console.log(mensaje);
        process.exit();
    }
    persona.comentarios.push(input.trim());
    rl.setPrompt('Dime un comentario: ');
    rl.prompt();
})