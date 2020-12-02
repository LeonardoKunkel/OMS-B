const express = require ('express'),
      aspectosModel = require ('../Models/e2AspectosModel'),
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
        F19: body.F19,
        F20: body.F20,
        F21: body.F21,
        F22: body.F22,
        F23: body.F23,
        F24: body.F24,
        F25: body.F25,
        F26: body.F26,
        F27: body.F27,
        F28: body.F28,
        F29: body.F29,
        F30: body.F30,
        F31: body.F31,
        F32: body.F32,
        F33: body.F33,
        F34: body.F34,
        F35: body.F35,
        F36: body.F36,
        F37: body.F37,
        F38: body.F38,
        F39: body.F39,
        N1: body.N1,
        N2: body.N2,
        N3: body.N3,
        N4: body.N4,
        N5: body.N5,
        N6: body.N6,
        N7: body.N7,
        N8: body.N8,
        N9: body.N9,
        N10: body.N10,
        N11: body.N11,
        N12: body.N12,
        N13: body.N13,
        N14: body.N14,
        N15: body.N15,
        N16: body.N16,
        N17: body.N17,
        N18: body.N18,
        N19: body.N19,
        N20: body.N20,
        N21: body.N21,
        N22: body.N22,
        N23: body.N23,
        N24: body.N24,
        N25: body.N25,
        N26: body.N26,
        N27: body.N27,
        N28: body.N28,
        N29: body.N29,
        N30: body.N30,
        N31: body.N31,
        N32: body.N32,
        N33: body.N33,
        N34: body.N34,
        N35: body.N35,
        N36: body.N36,
        N37: body.N37,
        N38: body.N38,
        N39: body.N39,
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
        M19: body.M19,
        M20: body.M20,
        M21: body.M21,
        M22: body.M22,
        M23: body.M23,
        M24: body.M24,
        M25: body.M25,
        M26: body.M26,
        M27: body.M27,
        M28: body.M28,
        M29: body.M29,
        M30: body.M30,
        M31: body.M31,
        M32: body.M32,
        M33: body.M33,
        M34: body.M34,
        M35: body.M35,
        M36: body.M36,
        M37: body.M37,
        M38: body.M38,
        M39: body.M39,
        VT1: body.VT1,
        VT2: body.VT2,
        VT3: body.VT3,
        VT4: body.VT4,
        VT5: body.VT5,
        VT6: body.VT6,
        VT7: body.VT7,
        VT8: body.VT8,
        VT9: body.VT9,
        VT10: body.VT10,
        VT11: body.VT11,
        VT12: body.VT12,
        VT13: body.VT13,
        VT14: body.VT14,
        VT15: body.VT15,
        VT16: body.VT16,
        VT17: body.VT17,
        VT18: body.VT18,
        VT19: body.VT19,
        VT20: body.VT20,
        VT21: body.VT21,
        VT22: body.VT22,
        VT23: body.VT23,
        VT24: body.VT24,
        VT25: body.VT25,
        VT26: body.VT26,
        VT27: body.VT27,
        VT28: body.VT28,
        VT29: body.VT29,
        VT30: body.VT30,
        VT31: body.VT31,
        VT32: body.VT32,
        VT33: body.VT33,
        VT34: body.VT34,
        VT35: body.VT35,
        VT36: body.VT36,
        VT37: body.VT37,
        VT38: body.VT38,
        VT39: body.VT39,
    };
    aspectosModel.create(newDatos, (err, aspectos) => {
        if (err) {
            res.status(400).json({
                ok: true,
                message: 'No se registraron los datos',
                err
            });
        }
        res.status(200).json({
            aspectos
        });
    });
});

// Get
app.get('/', (req, res) => {
    aspectosModel.find((err, aspectos) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: 'No se consultaron los aspectos',
                err
            });
        }
        res.status(200).json({
            aspectos
        });
    });
});

// Get ID
app.get('/:id', (req, res) => {
    var id = req.params.id;
    aspectosModel.findById(id, (err, newAspectos) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: `No se encontraron los datos con el id ${id}`,
                err
            });
        }
        res.status(200).json({
            newAspectos
        });
    });
});

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
        newRiesgos.F19 = body.F19,
        newRiesgos.F20 = body.F20,
        newRiesgos.F21 = body.F21,
        newRiesgos.F22 = body.F22,
        newRiesgos.F23 = body.F23,
        newRiesgos.F24 = body.F24,
        newRiesgos.F25 = body.F25,
        newRiesgos.F26 = body.F26,
        newRiesgos.F27 = body.F27,
        newRiesgos.F28 = body.F28,
        newRiesgos.F29 = body.F29,
        newRiesgos.F30 = body.F30,
        newRiesgos.F31 = body.F31,
        newRiesgos.F32 = body.F32,
        newRiesgos.F33 = body.F33,
        newRiesgos.F34 = body.F34,
        newRiesgos.F35 = body.F35,
        newRiesgos.F36 = body.F36,
        newRiesgos.F37 = body.F37,
        newRiesgos.F38 = body.F38,
        newRiesgos.F39 = body.F39,
        newRiesgos.N1 = body.N1,
        newRiesgos.N2 = body.N2,
        newRiesgos.N3 = body.N3,
        newRiesgos.N4 = body.N4,
        newRiesgos.N5 = body.N5,
        newRiesgos.N6 = body.N6,
        newRiesgos.N7 = body.N7,
        newRiesgos.N8 = body.N8,
        newRiesgos.N9 = body.N9,
        newRiesgos.N10 = body.N10,
        newRiesgos.N11 = body.N11,
        newRiesgos.N12 = body.N12,
        newRiesgos.N13 = body.N13,
        newRiesgos.N14 = body.N14,
        newRiesgos.N15 = body.N15,
        newRiesgos.N16 = body.N16,
        newRiesgos.N17 = body.N17,
        newRiesgos.N18 = body.N18,
        newRiesgos.N19 = body.N19,
        newRiesgos.N20 = body.N20,
        newRiesgos.N21 = body.N21,
        newRiesgos.N22 = body.N22,
        newRiesgos.N23 = body.N23,
        newRiesgos.N24 = body.N24,
        newRiesgos.N25 = body.N25,
        newRiesgos.N26 = body.N26,
        newRiesgos.N27 = body.N27,
        newRiesgos.N28 = body.N28,
        newRiesgos.N29 = body.N29,
        newRiesgos.N30 = body.N30,
        newRiesgos.N31 = body.N31,
        newRiesgos.N32 = body.N32,
        newRiesgos.N33 = body.N33,
        newRiesgos.N34 = body.N34,
        newRiesgos.N35 = body.N35,
        newRiesgos.N36 = body.N36,
        newRiesgos.N37 = body.N37,
        newRiesgos.N38 = body.N38,
        newRiesgos.N39 = body.N39,
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
        newRiesgos.M19 = body.M19,
        newRiesgos.M20 = body.M20,
        newRiesgos.M21 = body.M21,
        newRiesgos.M22 = body.M22,
        newRiesgos.M23 = body.M23,
        newRiesgos.M24 = body.M24,
        newRiesgos.M25 = body.M25,
        newRiesgos.M26 = body.M26,
        newRiesgos.M27 = body.M27,
        newRiesgos.M28 = body.M28,
        newRiesgos.M29 = body.M29,
        newRiesgos.M30 = body.M30,
        newRiesgos.M31 = body.M31,
        newRiesgos.M32 = body.M32,
        newRiesgos.M33 = body.M33,
        newRiesgos.M34 = body.M34,
        newRiesgos.M35 = body.M35,
        newRiesgos.M36 = body.M36,
        newRiesgos.M37 = body.M37,
        newRiesgos.M38 = body.M38,
        newRiesgos.M39 = body.M39,
        newRiesgos.VT1 = body.VT1,
        newRiesgos.VT2 = body.VT2,
        newRiesgos.VT3 = body.VT3,
        newRiesgos.VT4 = body.VT4,
        newRiesgos.VT5 = body.VT5,
        newRiesgos.VT6 = body.VT6,
        newRiesgos.VT7 = body.VT7,
        newRiesgos.VT8 = body.VT8,
        newRiesgos.VT9 = body.VT9,
        newRiesgos.VT10 = body.VT10,
        newRiesgos.VT11 = body.VT11,
        newRiesgos.VT12 = body.VT12,
        newRiesgos.VT13 = body.VT13,
        newRiesgos.VT14 = body.VT14,
        newRiesgos.VT15 = body.VT15,
        newRiesgos.VT16 = body.VT16,
        newRiesgos.VT17 = body.VT17,
        newRiesgos.VT18 = body.VT18,
        newRiesgos.VT19 = body.VT19,
        newRiesgos.VT20 = body.VT20,
        newRiesgos.VT21 = body.VT21,
        newRiesgos.VT22 = body.VT22,
        newRiesgos.VT23 = body.VT23,
        newRiesgos.VT24 = body.VT24,
        newRiesgos.VT25 = body.VT25,
        newRiesgos.VT26 = body.VT26,
        newRiesgos.VT27 = body.VT27,
        newRiesgos.VT28 = body.VT28,
        newRiesgos.VT29 = body.VT29,
        newRiesgos.VT30 = body.VT30,
        newRiesgos.VT31 = body.VT31,
        newRiesgos.VT32 = body.VT32,
        newRiesgos.VT33 = body.VT33,
        newRiesgos.VT34 = body.VT34,
        newRiesgos.VT35 = body.VT35,
        newRiesgos.VT36 = body.VT36,
        newRiesgos.VT37 = body.VT37,
        newRiesgos.VT38 = body.VT38,
        newRiesgos.VT39 = body.VT39,
        
        newRiesgos.save((err, aspectosActualizados) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    message: 'Error al actualizar'
                });
            }
            return res.status(200).json({
                aspectosActualizados
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
