const express = require('express'),
      estacionModel = require('../Models/EstacionModel'),
      representanteModel= require('../Models/representanteTecnicoRuta'),
      gerenteModel= require('../Models/gerenteModelo'),
      autoridadModel= require('../Models/autoridadMaximaRuta'),
      app = express();
    //POST
app.post('/create', (req, res) =>{
    let body = req.body;
    console.log(body);
    let newData ={
        nombre:body.nombre,
        telefono:body.telefono,
        idAutoridad: body.idAutoridad,
        idGerente: body.idGerente,
        idRepresentante: body.idRepresentante,
        cp: body.cp,
        calleNumero: body.calleNumero
    };

    estacionModel.create(newData, (err, estacion) =>{
        if (err) {
            res.status(400).json({
                ok:false,
                message:'No se pudo registrar el autor',
                err,
            })
        }
        res.status(200).json({
            estacion
        });
    });
});
    //GET

app.get('/',(req, res) =>{
    //res.send('sirvce')
    estacionModel.find({}, (err, estaciones) =>{
        representanteModel.populate(estaciones, {path: "idRepresentante"}, (err, estaciones) =>{
            gerenteModel.populate(estaciones, {path:"idGerente"}, (err, estaciones) => {
                autoridadModel.populate(estaciones, {path:"idAutoridad"}, (err, estaciones) =>{
                    res.status(200).send(estaciones); 
                });
            });
        });
    });
});

//GET ID

app.get('/:id', (req, res) =>{
    let id = req.params.id;

    estacionModel.findById(id, (err, estaciones) =>{
        if (err) {
            res.status(404).json({
                ok: false,
                message: `No se encontro con el ${id}`,
                err
            });
        }
        representanteModel.populate(estaciones, {path: "idRepresentante"}, (err, estaciones) =>{
            gerenteModel.populate(estaciones, {path:"idGerente"}, (err, estaciones) => {
                autoridadModel.populate(estaciones, {path:"idAutoridad"}, (err, estaciones) =>{
                    res.status(200).send(estaciones); 
                });
            });
        });
    });
});

//UPDATE

module.exports = app;