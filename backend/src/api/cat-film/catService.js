const Cat = require('./cat')

Cat.methods(['get', 'post', 'put', 'delete'])
Cat.updateOptions({new: true, runValidators: true})

module.exports = Cat