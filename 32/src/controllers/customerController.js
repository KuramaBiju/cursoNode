const controller = {};

controller.list = (req,res) => {
    
    /*A travez del middelware que configuramos, agrega a nuestro objeto req un metodo llamado getConnection
    el cual es el encargado de conectarse a mysql */

    req.getConnection((error, conn) =>{
        conn.query('SELECT * FROM customer', (err, customers) =>{
            if(err){
                res.json(err)
            }
            
            res.render('customers',{
                data: customers
            })

        });
    });
}

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((error,conn) => {
        conn.query('INSERT INTO customer set ?', [data],(error, customer) => {
            if(error){
                console.log(error);
            }
           res.redirect('/');
        });
    });
    

};

controller.edit = (req,res) => {
    const { id } = req.params;
    req.getConnection((error, conn) => {
      conn.query('SELECT * FROM customer WHERE id = ?', [parseInt(id)],(error, customer)=>{
          if(error){ 
              console.log(error);
          }
         
          res.render('customer_edit', {
              data:customer[0]
          })
      })
    })
};

controller.update = (req,res) => {
    const { id } = req.params;
    const data = req.body;
    req.getConnection((error, conn) => {
        conn.query('UPDATE customer set ? where id = ?',[data,parseInt(id)],(error,rows) => {
            if(error){
                console.log(error)
            }
            res.redirect('/');
        });
    })
};


controller.delete = (req, res) => {
   const { id } = req.params;
    req.getConnection((error, conn) => {
        conn.query('DELETE FROM customer WHERE id = ?', [id], (error,rows) =>{
            if(error){
                console.log(error);
            }
            res.redirect('/');
        });
    });

};


module.exports = controller;