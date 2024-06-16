const mongoose = require('mongoose');
const Produto = require('../models/model_produtos');

async function novoProduto(req, res) {
    const produto = await Produto.create(req.body);
    res.status(201).json(produto);
}
module.exports = { validarDados, novoProduto }