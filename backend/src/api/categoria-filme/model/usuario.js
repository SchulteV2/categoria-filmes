const { Schema } = require('mongoose')
const restful = require('node-restful')
const mongoose = restful.mongoose

const usuarioSchema = new mongoose.Schema({
    email: { 
        type: String, 
        required: true
    },
    senha: { 
        type: Number, 
        require: true 
    }
})

module.exports = restful.model('Usuario', usuarioSchema)