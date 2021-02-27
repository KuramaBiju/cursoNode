const express = require('express');

const bodyParser = require('body-parser');

const path = require('path');

const fs = require('fs');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('./public'));

app.get('/', (req, res) =>{

    res.setHeader('Content-Type', 'text/html');
    res.sendFile('./public/index.html');
});

app.get('/getPeliculas', (req, res) =>{
       
    const file = fs.readFileSync('file:///C:/Users/Sk8as/Desktop/cursoNode/28/peliculas.json', 'UTF-8');
    const origin=  "http://localhost:3001";
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', "GET,POST");
    res.setHeader('Content-Type', 'text/json');
    res.send(file);

})

app.post('/new', (req, res) =>{
    res.setHeader('Content-Type', 'text/plain');
    const nombre = req.body.nombre;
    const rating = req.body.rating;
    
    //abrir archivo
    let file = fs.readFileSync('file:///C:/Users/Sk8as/Desktop/cursoNode/28/peliculas.json', 'UTF-8');
    //convertir a un array 
    const json = JSON.parse(file);
    // instertar un nuevo elemento
    json.peliculas.push({"nombre": nombre , "raiting": parseInt(rating)})
    //guardar el json en el archivo
    file = fs.writeFileSync('file:///C:/Users/Sk8as/Desktop/cursoNode/28/peliculas.json', JSON.stringify(json));

    res.send('Datos guardados con exito');
})


app.listen(3001, () =>{
    console.log('Servidor iniciado');
})

