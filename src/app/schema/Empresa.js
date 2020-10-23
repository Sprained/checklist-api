const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Empresa = new Schema({
    nome: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Empresa', Empresa);