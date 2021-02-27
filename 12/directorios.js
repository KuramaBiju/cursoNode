const fs = require('fs');

/* -----------Como validar directorios y ver si existen ----------- */

/* ----------- mkdir sincrona*/

/*fs.mkdirSync('img')
/*Me pide el nombre que le vamos a dar al directorio y nos crear
una carpeta con ese nombre en la ubicacion que estamos*/

/* ----------- mkdir asincrona*/
/*Si el archivo existe nos tira error */


if(fs.existsSync('css')){
    /* ----------- Validar si existe una carpeta */
    console.log("YA EXISTE CAPOOOO");
}
else{
   fs.mkdir('css',(error) =>{
         if(error){
             throw error;
         }
      console.log("carpeta creada");
}); 
}




