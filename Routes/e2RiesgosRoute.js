const express = require ('express'),
      riesgosModel = require ('../Models/e2RiesgosModel'),
    //   { verificarToken } = require ('../server/middlewares/auth'),
      app = express();

// Post
app.post('/create', (req, res) => {
    var body = req.body;
    var newDatos = {
        consecuencia: body.consecuencia,
        frecuencia: body.frecuencia,
        magnitud: body.magnitud
    };
    riesgosModel.create(newDatos, (err, riesgosCreated) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: 'Riesgos not created',
                err
            });
        }
        res.status(200).json({
            riesgosCreated
        });
    });
});

// Get
app.get('/', (req, res) => {
    riesgosModel.find((err, riesgosFound) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: 'No se consultaron los riesgos',
                err
            });
        }
        res.status(200).json({
            ok: true,
            riesgosFound
        });
    });
});

// Get ID
app.get('/:id', (req, res) => {
    var id = req.params.id;
    riesgosModel.findById(id, (err, riesgoFound) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: `data with the id ${id} not found`,
                err
            });
        }
        res.status(200).json({
            riesgoFound
        });
    });
});

// Update
app.put('/:id', (req, res) => {
    var id = req.params.id;
    var body = req.body;
    riesgosModel.findById(id, (err, newRiesgos) => {
        if (err) {
            return res.status(400).json({
                ok: true,
                message: `No se encontró el id ${id}`,
                err
            });
        }
        if (!newRiesgos) {
            return res.status(500).json({
                ok: true,
                message: `No existe el id ${id}`
            });
        }
        newRiesgos.consecuencia = body.consecuencia,
        newRiesgos.frecuencia = body.frecuencia,
        newRiesgos.magnitud = body.magnitud
        
        newRiesgos.save((err, riesgosUpdated) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    message: 'Updated failed'
                });
            }
            return res.status(200).json({
                riesgosUpdated
            });
        });
    });
});

// Delete ID
app.delete('/:id', (req, res) => {
    var id = req.params.id;
    riesgosModel.findById(id, (err, riesgosDelete) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                message: 'No se pudo eliminar',
                err
            });
        }
        if (!riesgosDelete) {
            return res.json(400).json({
                ok: false,
                message: 'No se pudo eliminar',
                err
            });
        }
        res.status(200).json({
            riesgosDelete
        });
    });
});

module.exports = app;
