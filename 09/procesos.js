/* Primero hay que importar la libreria*/

const exec = require('child_process').exec
    /*Esto me va a permitir 
    ejecutar procesos o hacer llamadas */

const x = 10;
const y = 15;

exec('script.sh ' + x + ' ' + y, (err, stdout) => {
    /* Primero le paso el proceso que voy a ejecutar y luego 
       Utilizo 2 parametros en el callback */
    if (err) {
        throw err;
    }

    console.log('Comando ejecutado');
    console.log(stdout);
});