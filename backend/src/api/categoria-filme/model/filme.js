const { Schema } = require('mongoose')
const restful = require('node-restful')
const mongoose = restful.mongoose

const filmesSchema = new mongoose.Schema({
    nome: { 
        type: String, 
        required: true
    },
    duracao: { 
        type: Number, 
        require: true 
    },
    categoriaId: { 
        type: Schema.Types.ObjectId, 
        ref: 'Categoria',
        index: true 
    },
    usuarioId: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        index: true
    }
})

module.exports = restful.model('Filme', filmesSchema)