const express = require ('express'),
      listaModel = require ('../Models/e7ListaModel'),
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
        C29: body.C29,
        C30: body.C30,
        C31: body.C31,
        C32: body.C32,
        C33: body.C33,
        C34: body.C34,
        C35: body.C35,
        C36: body.C36,
        C37: body.C37,
        C38: body.C38,
        C39: body.C39,
        C40: body.C40,
        C41: body.C41,
        C42: body.C42,
    };
    listaModel.create(newDatos, (err, listas) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: 'No se registraron los datos',
                err
            });
        }
        res.status(200).json({
            listas
        });
    });
});

//Get
app.get('/', (req, res) => {
    listaModel.find((err, listas) => {
        if (err) {
            res.status(400).json({
                ok: false,
                message: 'No se consultó la lista',
                err
            });
        }
        res.status(200).json({
            listas
        });
    });
});

// Get ID
app.get('/:id', (req, res) => {
    var id = req.params.id;
    listaModel.findById(id, (err, newLista) => {
        if (err) {
            res.status(400).json({
                ok : false,
                message: `No se encontraron los datos con el id ${id}`,
                err
            });
        }
        res.status(200).json({
            newLista
        });
    });
});

app.put('/:id', (req, res) => {
    var id = req.params.id;
    var body = req.body;
    listaModel.findById(id, (err, newLista) => {
        if (err) {
            return res.status(400).json({
                ok: true,
                message: `No se encontró el ${id}`,
                err
            });
        }
        if (!newLista) {
            return res.status(500).json({
                ok: true,
                message: `No existe el id ${id}`
            });
        }
        newLista.C1 = body.C1,
        newLista.C2 = body.C2,
        newLista.C3 = body.C3,
        newLista.C4 = body.C4,
        newLista.C5 = body.C5,
        newLista.C6 = body.C6,
        newLista.C7 = body.C7,
        newLista.C8 = body.C8,
        newLista.C9 = body.C9,
        newLista.C10 = body.C10,
        newLista.C11 = body.C11,
        newLista.C12 = body.C12,
        newLista.C13 = body.C13,
        newLista.C14 = body.C14,
        newLista.C15 = body.C15,
        newLista.C16 = body.C16,
        newLista.C17 = body.C17,
        newLista.C18 = body.C18,
        newLista.C19 = body.C19,
        newLista.C20 = body.C20,
        newLista.C21 = body.C21,
        newLista.C22 = body.C22,
        newLista.C23 = body.C23,
        newLista.C24 = body.C24,
        newLista.C25 = body.C25,
        newLista.C26 = body.C26,
        newLista.C27 = body.C27,
        newLista.C28 = body.C28,
        newLista.C29 = body.C29,
        newLista.C30 = body.C30,
        newLista.C31 = body.C31,
        newLista.C32 = body.C32,
        newLista.C33 = body.C33,
        newLista.C34 = body.C34,
        newLista.C35 = body.C35,
        newLista.C36 = body.C36,
        newLista.C37 = body.C37,
        newLista.C38 = body.C38,
        newLista.C39 = body.C39,
        newLista.C40 = body.C40,
        newLista.C41 = body.C41,
        newLista.C42 = body.C42,
        
        newLista.save((err, listaActualizada) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    message: 'Error al actualizar'
                });
            }
            return res.status(200).json({
                listaActualizada
            });
        });
    });
});

//Delete ID
app.delete('/:id', (req, res) => {
    var id = req.params.id;
    listaModel.findById(id, (err, listaDelete) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                message: 'No se pudo eliminar',
                err
            });
        }
        if (!listaDelete) {
            return res.json(400).json({
                ok: false,
                message: 'No se pudo eliminar',
                err
            });
        }
        res.status(200).json({
            listaDelete
        });
    });
});

module.exports = app;
