
const http = require('http');

http.createServer((req,res) =>{
   
   res.writeHead(200, {'content-type': 'text/html'});
   res.end(`
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML</title>
</head>
<body>
    <h1>Hola mundo ss</h1>
    <p>
       
    </p>
</body>
</html>
   `);


}).listen(3000);
console.log("Servidor iniciado");

/*Si realizamos cambios, no se ejecutan automaticamente. Nos va a enseñar 2 maneras de hacerlo */

/*Para el tema de reincio tenemos 2 posibilidades node-dev o nodemon
Cualquiera de los 2 paquetes nos ayuda a tener un ambiente de desarrollo en el cual podamos reiniciar el servidor 
en cuanto estoss paquetes detecten que hay cambios en los archivos.
Ejecutando node-dev nombrearchivo se reincia 
*/