const express= require('express');
const app = express();
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express')
/*Mustache express, nos permite de la misma forma que pug configurar nuestra 
app y engine 
A diferencia de pug, me permite crear la estructura normal de html, y para incluir cada datos/variables 
{{nombre}}
Los arrays se representa  {{#datos}} y dentro colocamos los datos y hace como un foreach
para cerrarlo:  {{/datos}}
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/*Primero configuramos el engine, para reconozca al .mustache
exprees no lo reconoce si no */
app.engine('.mustache', mustacheExpress());

app.set('view engine', 'mustache');

app.get('/', (req, res) =>{
    
 const datos=[
     {nombre:'Jero', edad: 22},
     {nombre:'sarasa', edad:16}
 ];

 res.render('index', {
     titulo: 'Mi primera app',
     nombre:' Jeronimo dante',
     datos: datos
 });
});

app.listen(3002, () =>{
    console.log("Servidor iniciado");
})

