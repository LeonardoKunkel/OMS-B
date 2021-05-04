const express = require ('express'),
      aspectosModel = require ('../Models/e2AspectosModel'),
      //   { verificarToken } = require ('../server/middlewares/auth'),
      app = express();

// Post
app.post('/create', (req, res) => {
    const body = req.body;
    const newDatos = {
        act: body.act,
        F: body.F,
        N: body.N,
        M: body.M,
        VT: body.VT,
        AAS: body.AAS
    };
    aspectosModel.create(newDatos, (err, aspectosCreated) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: 'Aspectos not created',
                err
            });
        }
        res.status(200).json({
            ok: true,
            aspectosCreated
        });
    });
});

// Get
app.get('/', (req, res) => {
    aspectosModel.find((err, aspectosFound) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: 'No se consultaron los aspectos',
                err
            });
        }
        res.status(200).json({
            // ok: true,
            aspectosFound
        });
    });
});

// Get ID
app.get('/:id', (req, res) => {
    var id = req.params.id;
    aspectosModel.findById(id, (err, aspectoFound) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: `Aspecto with id ${id} not found`,
                err
            });
        }
        res.status(200).json({
            ok: true,
            aspectoFound
        });
    });
});

// Update
app.put('/:id', (req, res) => {
    var id = req.params.id;
    var body = req.body;
    aspectosModel.findById(id, (err, newAspectos) => {
        if (err) {
            return res.status(400).json({
                ok: true,
                message: `No se encontró el id ${id}`,
                err
            });
        }
        if (!newAspectos) {
            return res.status(500).json({
                ok: true,
                message: `No existe el id ${id}`
            });
        }
        newAspectos.act = body.act,
        newAspectos.F = body.F,
        newAspectos.N = body.N,
        newAspectos.M = body.M,
        newAspectos.VT = body.VT,
        newAspectos.AAS = body.AAS,
        
        newAspectos.save((err, aspectosUpdated) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    message: 'Not updated'
                });
            }
            return res.status(200).json({
                aspectosUpdated
            }); 
        });
    });
});

// Delete ID
app.delete('/:id', (req, res) => {
    var id = req.params.id;
    aspectosModel.findById(id, (err, aspectosDelete) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                message: 'No se pudo eliminar',
                err
            });
        }
        if (!aspectosDelete) {
            return res.json(400).json({
                ok: false,
                message: 'No se pudo eliminar',
                err
            });
        }
        res.status(200).json({
            aspectosDelete
        });
    });
});

module.exports = app;
