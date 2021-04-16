const express = require('express'),
      politicaModel = require('../Models/e1PoliticaModel'),
      app = express();
      
// Get
app.get('/', (req, res) => {
    politicaModel.find((err, politicasFound) => {
        if (err) {
            res.status(500).json({
                ok: false,
                message: 'Política not founded',
                err
            });
        } else {
            res.status(200).json({
                ok: true,
                politicasFound
            });
        }
    });
});

// Post
app.post('/create', (req, res) => {
    let body = req.body;
    let newPolitica = {
        // politicaEscogida: body.politicaEscogida
        name: body.name,
        desc: body.desc,
    };
    politicaModel.create(newPolitica, (err, politicaCreated) => {
        if (err) {
            res.status(500).json({
                ok: false,
                message: 'Política was not created',
                err
            });
        } else {
            res.status(200).json({
                ok: true,
                politicaCreated
            });
        }
    });
});

module.exports = app;
