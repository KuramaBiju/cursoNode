const fs = require('fs');

const archivo = 'prueba.txt';


/* -----------Validar si existe un archivo forma 1 ----------- */
if(fs.existsSync(archivo)){
 console.log("El archivo existe");
}
else {
    console.log("El archivo no existe");
}
/*----------- Validar si existe un archivo forma 2 ----------- */
fs.access(archivo, fs.constants.F_OK, (error) =>{
    /* primero la ubicacion del archivo y luego le pasamos lo que nos permite
    evaluar el archivo contra la constante, nos dice si el archivo es visible al proceso
    si existe o no y me pide un callback */

    if(error){
        console.log("El archivo no existe"); 
    }
    else{
        console.log("El archivo existe");
    }
}) 

/* ----------- Escribir en un archivo syncrona -----------*/

const content = "Contenido del texto";

fs.writeFileSync(archivo, content); 
/*Le pasamos el archivo y le contenido que queremos escribir.
Si el archivo no existe nos lo crea. */

/*-----------  Escribir en un archivo asyncrona ----------- */

fs.writeFile(archivo, content, (error) => {
    if(error){
        throw('Hubo error al escribir el archivo')
    }
    console.log("Se escribio todo cheto");
})

const textoAdicional = 'Otra liena de codigo';

/*-----------Para adjuntar mas info al archivo de forma asincrona
 -----------
*/

fs.appendFile(archivo, textoAdicional, (error)=>{
    if(error){
        throw('Hubo error al adjuntar el archivo')
    }
    console.log("Se adjunto todo cheto");
});

