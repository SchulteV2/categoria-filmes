const restful = require('node-restful')
const mongoose = restful.mongoose

const categoriaSchema = new mongoose.Schema({
    nome: { 
        type: String, 
        required: true 
    }
})

module.exports = restful.model('Categoria', categoriaSchema)