const express = require('express'),
      autoridadModel = require('../Models/autoridadModel'),
      app = express();

//POST
app.post('/create', (req,res) =>{
    let body = req.body;
    let newData = {
      nombre: body.nombre,
      apellidos: body.apellidos,
      telefono: body.telefono,
      correo: body.correo,
      firma: body.firma
    };

    autoridadModel.create(newData, (err, autoridad) =>{
        if (err) {
            res.status(400).json({
                ok:false,
                message:'No se pudo registrar los datos',
                err
            })
        };

        res.status(200).json({
            autoridad
        });
    });
});


//GET
app.get('/', (req, res) =>{
    autoridadModel.find((err, autoridad) =>{
        if (err) {
            res.status(400).json({
                ok: false,
                message:'No se pudo consultar Nominacion',
                err
            });
        }
        res.status(200).json({
            autoridad
        });
    });
});


//GET ID
app.get('/:id', (req, res) =>{
    let id = req.params.id;
    autoridadModel.findById(id, (err, newautoridad) =>{
        if (err) {
            res.status(404).json({
                ok:false,
                message:`no se encontro los datos con el id ${id}`,
                err
            });
        }

        res.status(200).json({
            newautoridad
        });

    });
});


//UPDATE
app.put('/:id', (req, res) =>{
    let id = req.params.id;
    let body = req.body;

    autoridadModel.findById(id, (err, newAutoridad)=>{
        if (err) {
            return res.status(400).json({
                ok: true,
                message: `No se encontro el id ${id}`,
                err
            });
        }

        if (!newAutoridad) {
            return res.status(500).json({
                ok:true,
                message: `No existe la nominacion con el id ${id}`,
            });
        }
        newAutoridad.nombre = body.nombre
        newAutoridad.apellidos = body.apellidos
        newAutoridad.telefono = body.telefono
        newAutoridad.correo = body.correo

        newAutoridad.save((err, autoridadActualizado) =>{
            if (err) {
                return res.status(400).json({
                   ok: false,
                   message:'Error al actualizar'
                });
            }
            return res.status(200).json({
               autoridadActualizado
            });
        });
    });
});


//DELETE ID
app.delete('/:id',(req, res) =>{
    let id = req.params.id;
    autoridadModel.findByIdAndRemove(id, (err,autoridadDelete) =>{
        if (err) {
            return res.status(400).json({
                ok:false,
                message: 'No se pudo borrar ',
                err
            });
        }
        if(!autoridadDelete){
            return res.status(400).json({
                ok:false,
                message:'No se pudo borrar la imagen',
                err
            });
        }
        res.status(200).json({
            autoridadDelete
        });
    });
})

module.exports = app;
