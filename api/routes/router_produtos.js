const express = require('express');

const router = express.Router();
const controllerProdutos = require("../controllers/controller_produtos");


router.post('/', controllerProdutos.validarDados, controllerProdutos.novoProduto);

module.exports = router;