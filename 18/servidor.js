/* */
const http = require('http');
/*Recibe 2 parametros, el request y el repsonse */
http.createServer((req,res) =>{
   /*El header, me pide 2 parametros el codigo de status y headers de content json y demás
     */
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
    <h1>Hola mundo</h1>
    <p>
        Bienveido a mi servidor
    </p>
</body>
</html>
   `);

/*Convencion de node poner el puerto 3000 */
}).listen(3000);
console.log("Servidor iniciado");

/* Tenemos que manejar todas las solicitudes y las respuestas a diferencia de un servidor apache */
