const Usuario = require('../model/usuario')

Usuario.methods(['get', 'post', 'put', 'delete'])
Usuario.updateOptions({new: true, runValidators: true})

module.exports = Usuario