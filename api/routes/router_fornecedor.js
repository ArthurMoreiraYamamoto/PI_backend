const express = require('express');
const router = express.Router();
const controllerFornecedor = require("../controllers/controller_fornecedor");

router.post(
    '/',
    controllerFornecedor.validarDados,
    controllerFornecedor.novoFornecedor
);

router.get(
    '/',
    controllerFornecedor.obterTodosFornecedor
);

router.get(
    '/:id',
    controllerFornecedor.buscarFornecedorPeloId,
    controllerFornecedor.obterFornecedor
);

module.exports = router;