/* */
const fs = require('fs');

const filez = fs.readdirSync('./'); /*Esta función me pide 
que le pase una ubicación en string como parametro
Me devuelve un array de los archivos que esta en esa ubicación
Esta funcion la podemos usar asincrona o sincrona
Asincrono
*/
fs.readdir('./', (err, files) => {
    /* Esta funcion es asincrona, esto me permite mapear la info mediante el callback
       me retorna el mismo resultado que la anterior*/
    if(err){
        throw err;
    }
    console.log(files)

    let archive = fs.readFileSync('archivo.txt','UTF-8');
     /*Le  pasamos le nombre del archivo y la codificacion. 
     Nos permite leer y abrir al archivo en cuestion de forma sincrona
      */
    console.log("Archivo sincrono "+ archive);

  fs.readFile('archivo.txt','UTF-8', (error, archiv)=>{
         /*Le  pasamos le nombre del archivo y la codificacion. 
     Nos permite leer y abrir al archivo en cuestion de forma asincrona
      */
    if(err){
        throw err;
    }
        console.log("Archivo asincrono "+archiv)

    });
}); 
