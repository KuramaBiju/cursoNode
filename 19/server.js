const http = require('http');
const path = require('path');
const fs = require('fs');

http.createServer((req,res) =>{

    console.log(`${req.method} solicita ${req.url}`);
    if(req.url == '/'){ // Si la url es /, leemos el archivo, le pasamos el formato y hacemos el callback
        fs.readFile('./public/index.html','UTF8', (error,html) =>{
            res.writeHead(200,{'Content-Type' : 'text/html'});
            res.end(html); // Retornamos un 200 y el end con el html
        }); 
    }
    else if(req.url.match('/.css$/')){ //Si no hacemos esto, no lee los css ni las imagenes
            const reqPath = path.join(__dirname, 'public', req.url);// Me devuelve todo el path completo, no la relativa
            const fileStreamg = fs.createStream(reqPath,'UTF-8');
            res.writeHead(200,{'Content-Type' : 'text/css'});
            fileStreamg.pipe(res);// Me manda en pedazitos la información del archivo que quiero cargar y lo va a mandar a res
                                  //Habría que hacer lo mismo para las imagenes pero me anda muy mal la pc
    }else{
        res.writeHead(404,{'Content-Type' : 'text/plain'});
            res.end('404 error');
    }
}).listen(3000);
