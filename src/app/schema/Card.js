const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Card = new Schema({
    nome: {
        type: String,
        required: true
    },
    empresa: {
        type: Schema.Types.ObjectId,
        ref: 'Empresa'
    }
});

module.exports = mongoose.model('Card', Card);