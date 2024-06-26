const mongoose = require('mongoose');
const Produto = require('../models/model_produtos');

const validarDados = async (req, res, next) => {
    const produto = new Produto(req.body);
    try {
        await produto.validate();
        next();
    } catch (error) {
        res.status(422).json({ msg: 'Dados invalidos' });
    };
};

const novoProduto = async (req, res) => {
    const produto = await Produto.create(req.body);
    res.status(201).json(produto);
};

const obterTodosProdutos = async (req, res) => {
    const produtos = await Produto.find({});
    res.json(produtos);
};

const obterProduto = async (req, res) => {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const produto = await Produto.findOne({ _id: id });
    res.json(produto);
};
const buscarProdutoPeloId = async (req, res, next) => {
    try {
        const id = new mongoose.Types.ObjectId(req.params.id)
        const produto = await Produto.findOne({ _id: id });
        if (produto) {
            next();
        } else {
            res.status(404).json({ msg: 'não encontrado' })
        }
    } catch (error) {
        res.status(400).json({ msg: 'inválido' });
    };
};

const atualizarProduto = async (req, res) => {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const produto = await Produto.findByIdAndUpdate({ _id: id }, req.body);
    res.json(produto);
};

const removerProduto = async (req, res) => {
    const id = new mongoose.Types.ObjectId(req.params.id);
    await Produto.findByIdAndDelete({ _id: id });
    res.status(204).end();
};

module.exports = { 
    validarDados, 
    novoProduto, 
    obterTodosProdutos, 
    obterProduto, 
    buscarProdutoPeloId, 
    atualizarProduto,
    removerProduto
};