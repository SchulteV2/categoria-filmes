const restful = require('node-restful')
const mongoose = restful.mongoose

const categoriaSchema = new mongoose.Schema({
    nome: { 
        type: String, 
        required: true 
    },
    usuarioId: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        index: true
    }
})

module.exports = restful.model('Categoria', categoriaSchema)