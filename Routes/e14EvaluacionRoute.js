const express = require('express'),
      evaluacionModel = require('../Models/e14EvaluacionModel'),
      // { verificarToken } = require ('../server/middlewares/auth'),
      app = express();
      
// Post
app.post('/create', (req, res) => {
    var body = req.body;
    var newDatos = {
        fecha1: body.fecha1,
        fecha2: body.fecha2,
        fecha3: body.fecha3,
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
        trimestre: body.trimestre
    };
    evaluacionModel.create(newDatos, (err, evaluacionReq) => {
        if (err) {
            res.status(400).json({
                ok: true,
                message: 'No se registraron los datos',
                err
            });
        }
        res.status(200).json({
            evaluacionReq
        });
    });
});

// Get
app.get('/', (req, res) => {
    evaluacionModel.find((err, evaluacionReq) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: 'No se consultaron los equipos críticos',
                err
            });
        }
        res.status(200).json({
            evaluacionReq
        });
    });
});

// Get ID
app.get('/:id', (req, res) => {
    var id = req.params.id;
    evaluacionModel.findById(id, (err, newEvaluacionReq) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: `No se encontraron los datos con el id ${id}`,
                err
            });
        }
        res.status(200).json({
            newEvaluacionReq
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
        newEvaluacionReq.fecha1 = body.fecha1,
        newEvaluacionReq.fecha2 = body.fecha2,
        newEvaluacionReq.fecha3 = body.fecha3,
        newEvaluacionReq.check1 = body.check1,
        newEvaluacionReq.check2 = body.check2,
        newEvaluacionReq.check3 = body.check3,
        newEvaluacionReq.check4 = body.check4,
        newEvaluacionReq.check5 = body.check5,
        newEvaluacionReq.check6 = body.check6,
        newEvaluacionReq.check7 = body.check7,
        newEvaluacionReq.check8 = body.check8,
        newEvaluacionReq.check9 = body.check9,
        newEvaluacionReq.check10 = body.check10,
        newEvaluacionReq.check11 = body.check11,
        newEvaluacionReq.check12 = body.check12,
        newEvaluacionReq.check13 = body.check13,
        newEvaluacionReq.check14 = body.check14,
        newEvaluacionReq.check15 = body.check15,
        newEvaluacionReq.check16 = body.check16,
        newEvaluacionReq.check17 = body.check17,
        newEvaluacionReq.check18 = body.check18,
        newEvaluacionReq.check19 = body.check19,
        newEvaluacionReq.check20 = body.check20,
        newEvaluacionReq.check21 = body.check21,
        newEvaluacionReq.check22 = body.check22,
        newEvaluacionReq.trimestre = body.trimestre,
        
        newEvaluacionReq.save((err, evaluacionReqActualizado) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    message: 'Error al actualizar'
                });
            }
            return res.status(200).json({
                evaluacionReqActualizado
            }); 
        });
    });
});

module.exports = app;
