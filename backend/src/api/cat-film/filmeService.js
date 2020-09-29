const filme = require('./filme')

filme.methods(['get', 'post', 'put', 'delete'])
filme.updateOptions({new: true, runValidators: true})

module.exports = filme