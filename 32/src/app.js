const express = require('express')
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnnection = require('express-myconnection');

const app = express();

/*Importando rutas */
const customerRoutes = require('./routes/customer');
const { urlencoded } = require('body-parser');

// settings es necesario setear el port cuando hacemos un servidor real
// Decimos si hay un puerto que nos da el sistema operativo, si no existe el 3000
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
// Modulo path, une los siguientes directorios. __dirname me da la ruta del archivo que lo ejecuta, desde el S.O en donde se encuentra
app.set('views', path.join(__dirname, 'views'));

// Middlewares son funciones que se ejecutan antes que vengan las peticiones del usuario.
/*Para poder alterar datos, convertir datos, etc. */
/*Morgan el primer path es dev, para mostrar algunos msj de consolas */
app.use(morgan('dev'))

app.use(myConnnection(mysql,{
    host: 'localhost',
    user:'root',
    password: '',
    port:'3306',
    database:'crudnodejs'
}, 'single'));
/*Nos permite entender los datos del formulario, no nos va a enviar imagenes ni datos complicados, solo campos */
app.use(express.urlencoded({extended: false}))



//routes 
app.use('/', customerRoutes);

/*Static files */
app.use(express.static(path.join(__dirname, 'public')));


app.listen(app.get('port'), () =>{
    console.log(`Inciado en el puerto.. ${app.get('port')}`);
})