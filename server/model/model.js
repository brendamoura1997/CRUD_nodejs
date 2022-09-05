const mongoose = require('mongoose');

//Aqui é feita a validação de dados, processamento de dados, criação do mongo scheme e etc

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: String,
    status: String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;