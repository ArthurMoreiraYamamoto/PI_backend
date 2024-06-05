const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        trim: true,
        uppercase: true,
        required: true
    },
    telefone: {
        type: Number,
        required: true,
        min: 0
    },
    email: {
        type: String,
        trim: true,
        uppercase: true
    },
    endereco: {
        type: String,
        trim: true,
        uppercase: true,
        required: true
    }
});

module.exports = mongoose.model("Cliente", clienteSchema)