const express = require('express'),
      gerenteModel = require('../Models/gerenteModelo'),
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

        gerenteModel.create(newData, (err, gerente) =>{
            if (err) {
                res.status(400).json({
                    ok:false,
                    message:'No se pudo registrar los datos',
                    err
                })
            };

            res.status(200).json({
                gerente
            });
        });
    });
        //GET
    app.get('/', (req, res) =>{
        gerenteModel.find((err, gerente) =>{
            if (err) {
                res.status(400).json({
                    ok: false,
                    message:'No se pudo consultar Nominacion',
                    err
                });
            }
            res.status(200).json({
                gerente
            });
        });
    });
        //GET ID
    app.get('/:id', (req, res) =>{
        let id = req.params.id;
        gerenteModel.findById(id, (err, newGerente) =>{
            if (err) {
                res.status(404).json({
                    ok:false,
                    message:`no se encontro los datos con el id ${id}`,
                    err
                });
            }
    
            res.status(200).json({
                newGerente
            });

        });
    });
        //UPDATE
    app.put('/:id', (req, res) =>{
        let id = req.params.id;
        let body = req.body;

        gerenteModel.findById(id, (err, newGerente)=>{
            if (err) {
                return res.status(400).json({
                    ok: true,
                    message: `No se encontro el id ${id}`,
                    err
                });
            }
    
            if (!newGerente) {
                return res.status(500).json({
                    ok:true,
                    message: `No existe la nominacion con el id ${id}`,
                });
            }
            newGerente.nombre = body.nombre
            newGerente.apellidos = body.apellidos
            newGerente.telefono = body.telefono
            newGerente.correo = body.correo

            newGerente.save((err, gerenteActualizado) =>{
                if (err) {
                    return res.status(400).json({
                       ok: false,
                       message:'Error al actualizar'
                    });
                }
                return res.status(200).json({
                   gerenteActualizado
                });
            });
        });
    });
    //DELETE ID
    app.delete('/:id',(req, res) =>{
        let id = req.params.id;
        gerenteModel.findByIdAndRemove(id, (err,gerenteDelete) =>{
            if (err) {
                return res.status(400).json({
                    ok:false,
                    message: 'No se pudo borrar ',
                    err
                });
            }
            if(!gerenteDelete){
                return res.status(400).json({
                    ok:false,
                    message:'No se pudo borrar la imagen',
                    err
                });
            }
            res.status(200).json({
                gerenteDelete
            });
        });
    })

    module.exports = app;
