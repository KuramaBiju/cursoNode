/* Los eventos nos permiten accionar cierto codigo cuando mandamos a llamar un evento. 
 */
const events = require('events');

const emitter = new events.EventEmitter();

emitter.on('eventoCustom', (mensaje, status) => { /*Luego creamos una función del callback de lo que se va a ejecutar apratir de ese evento*/

    console.log(`${status} : ${mensaje}`);

});
/*Para mandar a llamar un evento */
emitter.emit('eventoCustom', 'Mensaje cargando con exito', 200);
/* primero le pasamos el evento que quiero que se emita y luego le pasamos los argumentos
 */
/*Esto no es muy util, porque se tendría que estar configurando retieradas veces*/
/*Podemos heredar el objeto de emitter, para que cada uno que creemos no tener que ser tan especifico para c/u */