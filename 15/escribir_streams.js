const fs = require("fs");
const readline = require("readline");

let i = readline.createInterface(process.stdin, process.stdout);

i.question('Cual es tu nombre? >', (nombre)=>{
    /*Primero creamos el stream, le pasamos el archivo en el cual vamos a escribir */
    let stream = fs.createWriteStream(`./${nombre}.txt`);
    /*Comenzamos a escribir */
    stream.write(`Esto dijo ${nombre}`);
   
    process.stdout.write('Que quieres decir?');

    i.on('line', (dicho)=>{
        if(dicho.trim() =="salir"){
            stream.close();
            i.close();
        }else{
            /*Escribimos lo ingresado en consola */
            stream.write(dicho.trim() + '\n');
        }

    });
});