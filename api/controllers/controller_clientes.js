const mongoose = require('mongoose');
const Cliente = require('../models/model_clientes')

const validarDadosCliente = async (req, res, next) => {
    const cliente = new Cliente(req.body);
    try {
        await cliente.validate();
        next();
    } catch (err) {
        res.status(422).json({ msg: "Dados do cliente invalidos" });
    }
}

const novoCliente = async (req, res) => {
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente)
}

const obterTodosClientes = async (req, res, next) => {
    const clientes = await Cliente.find({});
    res.json(clientes);
};

const clientePeloId = async (req, res, next) => {
    try {
        const id = new mongoose.Types.ObjectId(req.params.id);
        const cliente = await Cliente.findOne({_id: id});
        if(cliente){
            next();
        } else{
            res.status(404).json({msg: 'Cliente não encontrado!'});
        }
    } catch (error) {
        res.status(400).json({msg: 'id inválido'})
    }
}

const obterCliente = async (req, res) => {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const cliente = await Cliente.findOne({_id: id});
    res.json(cliente);
}

module.exports = {validarDadosCliente, novoCliente, obterTodosClientes, clientePeloId, obterCliente}