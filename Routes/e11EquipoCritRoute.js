const express = require ('express'),
      equipoCritModel = require ('../Models/e11EquipoCritModel'),
      //   { verificarToken } = require ('../server/middlewares/auth'),
      app = express();
      
// Post
app.post('/create', (req, res) => {
    var body = req.body;
    var newDatos = {
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
        C19: body.C19,
        C20: body.C20,
        C21: body.C21,
        C22: body.C22,
        C23: body.C23,
        C24: body.C24,
        C25: body.C25,
        C26: body.C26,
        C27: body.C27,
        C28: body.C28,
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
                ok: false,
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

// Update
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
        newEquipoCrit.C1 = body.C1,
        newEquipoCrit.C2 = body.C2,
        newEquipoCrit.C3 = body.C3,
        newEquipoCrit.C4 = body.C4,
        newEquipoCrit.C5 = body.C5,
        newEquipoCrit.C6 = body.C6,
        newEquipoCrit.C7 = body.C7,
        newEquipoCrit.C8 = body.C8,
        newEquipoCrit.C9 = body.C9,
        newEquipoCrit.C10 = body.C10,
        newEquipoCrit.C11 = body.C11,
        newEquipoCrit.C12 = body.C12,
        newEquipoCrit.C13 = body.C13,
        newEquipoCrit.C14 = body.C14,
        newEquipoCrit.C15 = body.C15,
        newEquipoCrit.C16 = body.C16,
        newEquipoCrit.C17 = body.C17,
        newEquipoCrit.C18 = body.C18,
        newEquipoCrit.C19 = body.C19,
        newEquipoCrit.C20 = body.C20,
        newEquipoCrit.C21 = body.C21,
        newEquipoCrit.C22 = body.C22,
        newEquipoCrit.C23 = body.C23,
        newEquipoCrit.C24 = body.C24,
        newEquipoCrit.C25 = body.C25,
        newEquipoCrit.C26 = body.C26,
        newEquipoCrit.C27 = body.C27,
        newEquipoCrit.C28 = body.C28,
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
