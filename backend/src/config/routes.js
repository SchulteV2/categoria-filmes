const express = require('express')

module.exports = function(server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // cat Routes
    const catService = require('../api/cat-film/catService')
    catService.register(router, '/cats')

    // filme Routes
    const filmeService = require('../api/cat-film/filmeService')
    filmeService.register(router, '/filmes')
}