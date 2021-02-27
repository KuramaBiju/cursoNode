const fs = require('fs')

/*--------- Renombrar sincrono--------- */
/*Primero le paso el archivo original 
y luego a cual lo quiero cambiar */

/*fs.renameSync('./prueba.txt', './config.txt');

/*----------- Renombrar Asincrono----------- */
/*fs.rename('./config.txt', './prueba.txt', (error) =>{
    if(error){
        throw error;
    }
    console.log("El archivo fue renombrado exitosamente");
})*/
/*----------- Mover archivo ----------- */
/*fs.rename('./prueba.txt', './src/prueba.txt', (error) =>{
    if(error){
        throw error;
    }
    console.log("El archivo fue movido exitosamente");
})
*/


/*----------- Elimnar archivo puede ser asincrono o sincrono ----------- */

fs.unlinkSync('./src/prueba.txt');
