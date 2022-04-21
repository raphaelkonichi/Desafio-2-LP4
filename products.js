const express = require('express');
let router = express.Router();

const products = [];

router
    .route("")
    .get((req, res) => {
        return res.json(products); 
    })
    .post((req, res) => {
        var prod = req.body;
        prod.preco_sugerido = prod.valor_pago * 2;
        products.push(req.body);
        return res.json(products);
    });

router
    .route("/:index")
    .get((req, res) => {
        const { index } = req.params;
        return res.json(products[index]);
    })
    .put((req, res) => {
        const { index } = req.params;
        products[index] = req.body;
        return res.json(products);
    })
    .delete((req, res) => {
        const { index } = req.params;    
        products.splice(index, 1);
        return res.json({ message: "O produto foi deletado" });
    });

module.exports = router;