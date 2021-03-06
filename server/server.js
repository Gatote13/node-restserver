require('./config/config')

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


 
//Actualizardatos
app.get('/usuario', function (req, res) {
  res.json('get Usuario')
});


//crear
app.post('/usuario', function (req, res) {
    
    let body= req.body;
    if(body.nombre === undefined){
        res.status(400).json({
            ok: false,
            mensaje: 'el nombre es nesesario'
        })
    }else{
         res.json({
            persona: body
        });
    }
});

//Actualizar
app.put('/usuario/:id', function (req, res) {
    
    let id = req.params.id;
    
  res.json({
     id 
  });
    
    
});

//Borrar
app.delete('/usuario', function (req, res) {
  res.json('delete Usuario')
});

 
app.listen(3000, () =>{
   console.log("Escuchando puerto: ", process.env.PORT);
});