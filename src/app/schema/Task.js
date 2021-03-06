const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Task = new Schema({
    nome: {
        type: String,
        required: true
    },
    card: {
        type: Schema.Types.ObjectId,
        ref: 'Card'
    }
});

module.exports = mongoose.model('Task', Task);