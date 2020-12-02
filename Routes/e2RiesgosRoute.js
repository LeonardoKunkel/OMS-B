const express = require ('express'),
      riesgosModel = require ('../Models/e2RiesgosModel'),
    //   { verificarToken } = require ('../server/middlewares/auth'),
      app = express();

// Post
app.post('/create', (req, res) => {
    var body = req.body;
    var newDatos = {
        F1: body.F1,
        F2: body.F2,
        F3: body.F3,
        F4: body.F4,
        F5: body.F5,
        F6: body.F6,
        F7: body.F7,
        F8: body.F8,
        F9: body.F9,
        F10: body.F10,
        F11: body.F11,
        F12: body.F12,
        F13: body.F13,
        F14: body.F14,
        F15: body.F15,
        F16: body.F16,
        F17: body.F17,
        F18: body.F18,
        C1: body.C1,
        C2: body.C2,
        C3: body.C3,
        C4: body.C4,
        C5: body.C5,
        C6: body.C6,
        C7: body.C7,
        C8: body.C8,
        C9: body.C9,
        C10: body.C10,
        C11: body.C11,
        C12: body.C12,
        C13: body.C13,
        C14: body.C14,
        C15: body.C15,
        C16: body.C16,
        C17: body.C17,
        C18: body.C18,
        M1: body.M1,
        M2: body.M2,
        M3: body.M3,
        M4: body.M4,
        M5: body.M5,
        M6: body.M6,
        M7: body.M7,
        M8: body.M8,
        M9: body.M9,
        M10: body.M10,
        M11: body.M11,
        M12: body.M12,
        M13: body.M13,
        M14: body.M14,
        M15: body.M15,
        M16: body.M16,
        M17: body.M17,
        M18: body.M18,
    };
    riesgosModel.create(newDatos, (err, riesgos) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: 'No se registraron los datos',
                err
            });
        }
        res.status(200).json({
            riesgos
        });
    });
});

// Get
app.get('/', (req, res) => {
    riesgosModel.find((err, riesgos) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: 'No se consultaron los riesgos',
                err
            });
        }
        res.status(200).json({
            riesgos
        });
    });
});

// Get ID
app.get('/:id', (req, res) => {
    var id = req.params.id;
    riesgosModel.findById(id, (err, newRiesgos) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: `No se encontraron los datos con el id ${id}`,
                err
            });
        }
        res.status(200).json({
            newRiesgos
        });
    });
});

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
        newRiesgos.F1 = body.F1,
        newRiesgos.F2 = body.F2,
        newRiesgos.F3 = body.F3,
        newRiesgos.F4 = body.F4,
        newRiesgos.F5 = body.F5,
        newRiesgos.F6 = body.F6,
        newRiesgos.F7 = body.F7,
        newRiesgos.F8 = body.F8,
        newRiesgos.F9 = body.F9,
        newRiesgos.F10 = body.F10,
        newRiesgos.F11 = body.F11,
        newRiesgos.F12 = body.F12,
        newRiesgos.F13 = body.F13,
        newRiesgos.F14 = body.F14,
        newRiesgos.F15 = body.F15,
        newRiesgos.F16 = body.F16,
        newRiesgos.F17 = body.F17,
        newRiesgos.F18 = body.F18,
        newRiesgos.C1 = body.C1,
        newRiesgos.C2 = body.C2,
        newRiesgos.C3 = body.C3,
        newRiesgos.C4 = body.C4,
        newRiesgos.C5 = body.C5,
        newRiesgos.C6 = body.C6,
        newRiesgos.C7 = body.C7,
        newRiesgos.C8 = body.C8,
        newRiesgos.C9 = body.C9,
        newRiesgos.C10 = body.C10,
        newRiesgos.C11 = body.C11,
        newRiesgos.C12 = body.C12,
        newRiesgos.C13 = body.C13,
        newRiesgos.C14 = body.C14,
        newRiesgos.C15 = body.C15,
        newRiesgos.C16 = body.C16,
        newRiesgos.C17 = body.C17,
        newRiesgos.C18 = body.C18,
        newRiesgos.M1 = body.M1,
        newRiesgos.M2 = body.M2,
        newRiesgos.M3 = body.M3,
        newRiesgos.M4 = body.M4,
        newRiesgos.M5 = body.M5,
        newRiesgos.M6 = body.M6,
        newRiesgos.M7 = body.M7,
        newRiesgos.M8 = body.M8,
        newRiesgos.M9 = body.M9,
        newRiesgos.M10 = body.M10,
        newRiesgos.M11 = body.M11,
        newRiesgos.M12 = body.M12,
        newRiesgos.M13 = body.M13,
        newRiesgos.M14 = body.M14,
        newRiesgos.M15 = body.M15,
        newRiesgos.M16 = body.M16,
        newRiesgos.M17 = body.M17,
        newRiesgos.M18 = body.M18,
        
        newRiesgos.save((err, riesgosActualizados) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    message: 'Error al actualizar'
                });
            }
            return res.status(200).json({
                riesgosActualizados
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
