const fs = require('fs');

/*let content = fs.readFileSync('./logs.log');
console.log(content.length);
*/
/*
A medida que va leyendo, va mandando los paquetes a nuestra aplicacion para que podamos adjuntar a nuestros datos.
Se utilizan cuando es mucha la cantidad de datos que vamos a manejar
Para crear un stream 
Le paso el archivo y el formato de codificacion
*/
let stream = fs.createReadStream('./logs.log','UTF-8');
let data ='';
/* Este detecta el evento data, una vez ejecutado, esto se ejecuta una sola vez. */
stream.once('data' ,()=>{
  console.log("Iniciando el stream");
});
/*El stream funciona con eventos, cuando empezamos a detectar que hay datos fluyendo, este evento se activa
 */
stream.on('data',(chunk) =>{
    console.log(chunk.length + ' / ');
    data += chunk;
});
/*Cuando finaliza el stream */
stream.on('end',() =>{
    console.log("Fin del stream");
    console.log(data.length);
})