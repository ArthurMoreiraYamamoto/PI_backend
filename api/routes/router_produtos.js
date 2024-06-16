const express = require('express');

const router = express.Router();
const controllerProdutos = require("../controllers/controller_produtos");


router.post('/', controllerProdutos.validarDados, controllerProdutos.novoProduto);

router.get('/', controllerProdutos.obterTodosProdutos);

router.get('/:id', controllerProdutos.buscarProdutoPeloId, controllerProdutos.obterProduto);

module.exports = router;