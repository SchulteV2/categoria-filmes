const restful = require('node-restful')
const mongoose = restful.mongoose

const categoriaSchema = new mongoose.Schema({
    catName: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('categoria', categoriaSchema)