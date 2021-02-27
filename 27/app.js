/*Middelware nos permite tener una representación de uso 
de nuestras funciones request y repsonse de una manera mucho más facil */
/* Al utilizar middelware lo que hace es tener 1 capa arriba de exprres / node en donde podemos
abstraer funciones, que de otra forma la tendríamos que hacer manual. */

/*Body-parser nos permite modifica como manejamos el request y result/response, de tal forma que nosotros
podamos simplificar codigo, sirve tanto para post y para get  */

const express = require('express');

const app = express();
const bodyParser = require('body-parser');


const urlEncodedParser = bodyParser.urlencoded({extended:false});

/*Cada vez que se metan llama a esta funcion, y ya esta configurado nuestro middelware */
app.get('/', urlEncodedParser, (req, res) =>{
   
    res.send(`<h1>Tus datos son : <br/> 
              Nombre : ${req.query.nombre} <br/>
              Apellido : ${req.query.apellido}</h1>` );
    console.log(req.query);
});

app.listen(3000,() =>{
    console.log('Escuchando..');
});