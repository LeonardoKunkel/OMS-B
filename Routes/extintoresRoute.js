const express = require('express'),
      extintorModel = require('../Models/extintoresModel');
      app = express();
      
// Get
app.get('/', (req, res) => {
    extintorModel.find((err, extinguisherFound) => {
        if (err) {
            res.status(500).json({
                ok: false,
                message: 'Extinguishers not Found',
                err
            });
        }
        res.status(200).json({
            ok: true,
            extinguisherFound
        });
    });
});

// Post
app.post('/create', (req, res) => {
    const body = req.body;
    const newExtinguishers = {
        ubicacion: body.ubicacion,
        agente: body.agente,
        paro: body.paro,
        botiquin: body.botiquin
    };
    extintorModel.create(newExtinguishers, (err, extinguishersCreated) => {
        if (err) {
            res.status(500).json({
                ok: false,
                message: 'Extinguishers not Created',
                err
            });
        }
        res.status(200).json({
            ok: true,
            extinguishersCreated
        });
    });
});

// Delete Id
app.delete('/:id', (req, res) => {
    const id = req.params.id;
    extintorModel.findByIdAndRemove(id, (err, extinguishersRemoved) => {
        if (err) {
            res.status(500).status({
                ok: false,
                message: 'Extinguisher not deleted',
                err
            });
        }
        if (!extinguishersRemoved) {
            res.status(40).json({
                ok: false,
                message:'Extinguisher not deleted',
                err
            });
        }
        res.status(200).json({
            ok: true,
            extinguishersRemoved
        });
    });
});

module.exports = app;
