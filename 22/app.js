// Para instalar un modulo con npm 
// npm install nombrePquete
const _ = require('underscore'); 

const list =[
{'id': 1, 'Nombre': 'jero','edad':21},
{'id': 2, 'Nombre': 'pepe','edad':18},
{'id': 3, 'Nombre': 'Elena','edad':25}
];

const res = _.findWhere(list,{'edad':25}); //Primer parametro la lista y el segundo lo que va a buscar

console.log(res);