const express = require('express'),
      representanteModel = require('../Models/representanteTecnicoRuta'),
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

        representanteModel.create(newData, (err, representante) =>{
            if (err) {
                res.status(400).json({
                    ok:false,
                    message:'No se pudo registrar los datos',
                    err
                });
            }

            res.status(200).json({
                representante
            });
        });
    });
        //GET
    app.get('/', (req, res) =>{
        representanteModel.find((err, representante) =>{
            if (err) {
                res.status(400).json({
                    ok: false,
                    message:'No se pudo consultar Nominacion',
                    err
                });
            }
            res.status(200).json({
                representante
            });
        });
    });
        //GET ID
    app.get('/:id', (req, res) =>{
        let id = req.params.id;
        representanteModel.findById(id, (err, newRepresentante) =>{
            if (err) {
                res.status(404).json({
                    ok:false,
                    message:`no se encontro los datos con el id ${id}`,
                    err
                });
            }
    
            res.status(200).json({
                newRepresentante
            });

        });
    });
        //UPDATE
    app.put('/:id', (req, res) =>{
        let id = req.params.id;
        let body = req.body;

        representanteModel.findById(id, (err, newRepresentante)=>{
            if (err) {
                return res.status(400).json({
                    ok: true,
                    message: `No se encontro el id ${id}`,
                    err
                });
            }
    
            if (!newRepresentante) {
                return res.status(500).json({
                    ok:true,
                    message: `No existe la nominacion con el id ${id}`,
                });
            }
            newRepresentante.nombre = body.nombre,
            newRepresentante.apellidos = body.apellidos,
            newRepresentante.telefono = body.telefono,
            newRepresentante.correo = body.correo,

            newRepresentante.save((err, representanteActualizado) =>{
                if (err) {
                    return res.status(400).json({
                       ok: false,
                       message:'Error al actualizar'
                    });
                }
                return res.status(200).json({
                   representanteActualizado
                });
            });
        });
    });
    //DELETE ID
    app.delete('/:id',(req, res) =>{
        let id = req.params.id;
        representanteModel.findByIdAndRemove(id, (err,representanteDelete) =>{
            if (err) {
                return res.status(400).json({
                    ok:false,
                    message: 'No se pudo borrar ',
                    err
                });
            }
            if(!representanteDelete){
                return res.status(400).json({
                    ok:false,
                    message:'No se pudo borrar la imagen',
                    err
                });
            }
            res.status(200).json({
                representanteDelete
            });
        });
    })

    module.exports = app;
