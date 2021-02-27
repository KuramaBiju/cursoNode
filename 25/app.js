/*Express es el framework mas popular para node, nos permite crear app webs de forma sencillas,
 que puedan ser robustas.*/
 /*El middelware son librerias o modulos adicionales, que trabajan arriba de express que al 
 final todo es codigo node, las cuales nos permiten simplificar las tareas a la hora de desarrollar
 Para instalar npm install express
 Lo podemos usar como servidor web estatico o web dinamico
 */
const express = require('express');

let app = express(); /*Inicializamos express */
/*Use es el metodo en el cual configuramos todo lo que va a requerir nuestra app para que podamos explotarlo */
app.use(express.static('./public')); /*Indicamos que va a ser contenido estatico y le pasamos la ruta */ 

app.listen(3000);
console.log("Express iniciado");