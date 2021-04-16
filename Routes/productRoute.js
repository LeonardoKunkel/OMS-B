const express = require('express'),
      productModel = require('../Models/productModel'),
      app = express();
      
//Get
app.get('/', (req, res) => {
    productModel.find((err, productFound) => {
        if (err) {
            res.status(500).json({
                ok: false,
                message: 'Data not found',
                err
            });
        }
        res.status(200).json({
            ok: true,
            productFound
        });
    });
});

// Post
app.post('/create', (req, res) => {
    const body = req.body;
    const newProduct = {
        dispensarios: body.dispensarios,
        producto: body.producto,
        siglas: body.siglas,
        tanques: body.tanques
    };
    productModel.create(newProduct, (err, productCreated) => {
        if (err) {
            res.status(500).json({
                ok: false,
                message: 'Product not created',
                err
            });
        }
        res.status(201).json({
            ok: true,
            productCreated
        });
    });
});

// Delete
app.delete('/:id', (req, res) => {
    const id = req.params.id;
    productModel.findByIdAndRemove(id, (err, productRemoved) => {
        if (err) {
            res.status(500).json({
                ok: false,
                message: 'Product not deleted',
                err
            });
        }
        if (!productRemoved) {
            res.status(400).json({
                ok: false,
                message: 'Product not deleted',
                err
            });
        }
        res.status(200).json({
            ok: true,
            productRemoved
        });
    });
});

module.exports = app;
