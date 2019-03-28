const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    reference: {
        type: String
    },
    etat: {
        type: String
    },
    prix: {
        type: Number
    },
    marque: {
        type: String
    },
    modele: {
        type: String
    },
    code: {
        type: Number,
        unique :true
    },
    commentaire: {
        type: String
    },
    ip: {
        type: String
    },
    dateMiseEnService: {
        type: Date
    }

});

module.exports = mongoose.model('Todo', Todo);