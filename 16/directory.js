/*Listar achivos dentro de un directorio */
const fs = require('fs');
const path = require('path');

class Directory{
    constructor(){
        this.__dir = 'docs';
        this._path= __dirname;
        this.createDocsDir();
    }
    createDocsDir(){
        /*Validamos el directorio donde vamos a guardar los archivos */
        this._path = path.join(this._path,this.__dir);
     
        if(fs.existsSync(this.__dir)){
           fs.mkdirSync(this.__dir);
        }
    }
    getPath (){
        /*Obtener la ruta */
        return this._path;
    }

    getShortPath (){
        /*Obtenemos la ruta simplificada  */
        const paths = path.parse(this._path);
        let delimiter = '/';
        if(paths.dir.lastIndexOf(delimiter) < 0 ){
               delimiter =`\\`;
        }

        return `${paths.root}...${delimiter}${paths.name}`;
    }

    getFilesInDir(){
        /*Muestro los archivos de esa carpeta */
        const files = fs.readdirSync(this._path);
        let n = 0;
        console.log(`
        ====================================
        Ubicación: ${this.getShortPath()}
        ====================================`);
       files.forEach(file =>{
           console.log(`    ${file}`);
           n++;
       })
    }

}

module.exports = Directory;