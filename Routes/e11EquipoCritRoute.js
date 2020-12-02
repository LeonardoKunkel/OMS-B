const express = require ('express'),
      equipoCritModel = require ('../Models/e11EquipoCritModel'),
      //   { verificarToken } = require ('../server/middlewares/auth'),
      app = express();
      
// Post
app.post('/create', (req, res) => {
    var body = req.body;
    var newDatos = {
        check1: body.check1,
        check2: body.check2,
        check3: body.check3,
        check4: body.check4,
        check5: body.check5,
        check6: body.check6,
        check7: body.check7,
        check8: body.check8,
        check9: body.check9,
        check10: body.check10,
        check11: body.check11,
        check12: body.check12,
        check13: body.check13,
        check14: body.check14,
        check15: body.check15,
        check16: body.check16,
        check17: body.check17,
        check18: body.check18,
        check19: body.check19,
        check20: body.check20,
        check21: body.check21,
        check22: body.check22,
        check23: body.check23,
        check24: body.check24,
        check25: body.check25,
        check26: body.check26,
        check27: body.check27,
        check28: body.check28,
        num1: body.num1,
        num2: body.num2,
        num3: body.num3,
        num4: body.num4,
        num5: body.num5,
        num6: body.num6,
        num7: body.num7,
        num8: body.num8,
        num9: body.num9,
        num10: body.num10,
        num11: body.num11,
        num12: body.num12,
        num13: body.num13,
        num14: body.num14,
        num15: body.num15,
        num16: body.num16,
        num17: body.num17,
        num18: body.num18,
    };
    equipoCritModel.create(newDatos, (err, equipoCritico) => {
        if (err) {
            res.status(400).json({
                ok: true,
                message: 'No se registraron los datos',
                err
            });
        }
        res.status(200).json({
            equipoCritico
        });
    });
});

// Get
app.get('/', (req, res) => {
    equipoCritModel.find((err, equipoCritico) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: 'No se consultaron los equipos críticos',
                err
            });
        }
        res.status(200).json({
            equipoCritico
        });
    });
});

// Get ID
app.get('/:id', (req, res) => {
    var id = req.params.id;
    equipoCritModel.findById(id, (err, newEquipoCrit) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: `No se encontraron los datos con el id ${id}`,
                err
            });
        }
        res.status(200).json({
            newEquipoCrit
        });
    });
});

app.put('/:id', (req, res) => {
    var id = req.params.id;
    var body = req.body;
    equipoCritModel.findById(id, (err, newEquipoCrit) => {
        if (err) {
            return res.status(400).json({
                ok: true,
                message: `No se encontró el id ${id}`,
                err
            });
        }
        if (!newEquipoCrit) {
            return res.status(500).json({
                ok: true,
                message: `No existe el id ${id}`
            });
        }
        newEquipoCrit.check1 = body.check1,
        newEquipoCrit.check2 = body.check2,
        newEquipoCrit.check3 = body.check3,
        newEquipoCrit.check4 = body.check4,
        newEquipoCrit.check5 = body.check5,
        newEquipoCrit.check6 = body.check6,
        newEquipoCrit.check7 = body.check7,
        newEquipoCrit.check8 = body.check8,
        newEquipoCrit.check9 = body.check9,
        newEquipoCrit.check10 = body.check10,
        newEquipoCrit.check11 = body.check11,
        newEquipoCrit.check12 = body.check12,
        newEquipoCrit.check13 = body.check13,
        newEquipoCrit.check14 = body.check14,
        newEquipoCrit.check15 = body.check15,
        newEquipoCrit.check16 = body.check16,
        newEquipoCrit.check17 = body.check17,
        newEquipoCrit.check18 = body.check18,
        newEquipoCrit.check19 = body.check19,
        newEquipoCrit.check20 = body.check20,
        newEquipoCrit.check21 = body.check21,
        newEquipoCrit.check22 = body.check22,
        newEquipoCrit.check23 = body.check23,
        newEquipoCrit.check24 = body.check24,
        newEquipoCrit.check25 = body.check25,
        newEquipoCrit.check26 = body.check26,
        newEquipoCrit.check27 = body.check27,
        newEquipoCrit.check28 = body.check28,
        newEquipoCrit.num1 = body.num1,
        newEquipoCrit.num2 = body.num2,
        newEquipoCrit.num3 = body.num3,
        newEquipoCrit.num4 = body.num4,
        newEquipoCrit.num5 = body.num5,
        newEquipoCrit.num6 = body.num6,
        newEquipoCrit.num7 = body.num7,
        newEquipoCrit.num8 = body.num8,
        newEquipoCrit.num9 = body.num9,
        newEquipoCrit.num10 = body.num10,
        newEquipoCrit.num11 = body.num11,
        newEquipoCrit.num12 = body.num12,
        newEquipoCrit.num13 = body.num13,
        newEquipoCrit.num14 = body.num14,
        newEquipoCrit.num15 = body.num15,
        newEquipoCrit.num16 = body.num16,
        newEquipoCrit.num17 = body.num17,
        newEquipoCrit.num18 = body.num18,
        
        
        newEquipoCrit.save((err, equipoCritActualizado) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    message: 'Error al actualizar'
                });
            }
            return res.status(200).json({
                equipoCritActualizado
            }); 
        });
    });
});

// Delete ID
app.delete('/:id', (req, res) => {
    var id = req.params.id;
    equipoCritModel.findById(id, (err, equipoCritDelete) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                message: 'No se pudo eliminar',
                err
            });
        }
        if (!equipoCritDelete) {
            return res.json(400).json({
                ok: false,
                message: 'No se pudo eliminar',
                err
            });
        }
        res.status(200).json({
            equipoCritDelete
        });
    });
});

module.exports = app;
