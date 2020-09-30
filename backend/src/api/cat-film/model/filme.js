const { Schema } = require('mongoose')
const restful = require('node-restful')
const mongoose = restful.mongoose

const filmesSchema = new mongoose.Schema({
    filmeName: { 
        type: String, 
        required: true
    },
    duracao: { 
        type: Number, 
        require: true 
    },
    categoria: { 
        type: Schema.Types.ObjectId, 
        ref: 'Categoria',
        index: true 
    }
})

module.exports = restful.model('Filme', filmesSchema)