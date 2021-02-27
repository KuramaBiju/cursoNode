/* Podemos usar el modulo http o https, para conexiones seguras.
 */
const https = require('https');


/*2 parametros, la url y un callback */
const req = https.request('https://pokeapi.co/api/v2/pokemon/1', (res) =>{
   console.log(`status code: ${res.statusCode}`);
   /*console.log('Headers %j: ', res.headers);
   /*Ponemos %j porque va a ser remplazado por una variable json */

   let body='';
  /*Cada vez que la solicitud se hace, funciona como uns stream me pasa la info de a pedazitos */
   res.on('data', chunk => {
    body +=chunk;
   });

   res.on('end', () => {
    console.log("Termino req");
    console.log(body);
   });


}); 

req.on('error',err => {
  console.log(err);
});

req.end();