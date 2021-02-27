const express = require('express');

const app = express();
const port = 3000;

/*Si nosotros queremos manipular nuestra app de tal forma que responda a ciertas direcciones: */
/*Cuando la app reciba una solicitud de tipo get */
/*Primero le paso el path donde vamos a ejecutar las respuestas */
app.get('/', (req, res) =>{
     res.send('Hola a todos');
});

app.get('/home', (req, res) =>{
    res.send('Estas en la pagina de inicio');
});

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});