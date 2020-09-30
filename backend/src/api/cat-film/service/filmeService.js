const Filme = require('../model/filme')

Filme.methods(['get', 'post', 'put', 'delete'])
Filme.updateOptions({new: true, runValidators: true})

module.exports = Filme