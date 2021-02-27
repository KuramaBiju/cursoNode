
/*Instalamos pug
npm install pug
Vamos a utilizar engine para traducir archivos .pug a archivos html
Pugg necesita una carpeta views, donde busca los archivos
Los motores de planitlla, cada una de ellas tiene su sintaxis definida

*/
const express= require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/*Para mandar a llamar a index.pug, 
primero tenemos que especificar el tipo de motor de plantillas que vamos a usar
 */
app.set('view engine', 'pug');

app.get('/', (req, res) =>{
    /*Me pide una vista en el primer parametro, y luego los datos que queremos pasar a nuestra plantilla
    para que se renderice */
    res.render('index',{titulo:'Mi primera app',nombre:'Jero'})

});

app.listen(3002, () =>{
    console.log("Servidor iniciado");
})


/*<!-- Pug nos permite es simplificar la sintaxis, basada den identacion 
Esquema tradicional 
Hay 2 formas para colocar datos,
1) Si yo quiero que una etiqueta especifica solamente contenga la informacion de los datos que yo le paso
  title= titulo

2) Si tengo una estrucutra y necesito convinar mas texto o otras etiquetas
#{nombre} 
 -->  */