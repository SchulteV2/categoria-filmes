const Cat = require('../model/cat')

Cat.methods(['get', 'post', 'put', 'delete'])
Cat.updateOptions({new: true, runValidators: true})

module.exports = Cat