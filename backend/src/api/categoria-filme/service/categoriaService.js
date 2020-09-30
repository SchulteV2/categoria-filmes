const Categoria = require('../model/categorias')

Categoria.methods(['get', 'post', 'put', 'delete'])
Categoria.updateOptions({new: true, runValidators: true})

module.exports = Categoria