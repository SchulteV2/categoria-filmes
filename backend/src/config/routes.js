const express = require('express')

module.exports = function(server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // cat Routes
    const catService = require('../api/categoria-filme/service/categoriaService')
    catService.register(router, '/categoria')

    // filme Routes
    const filmeService = require('../api/categoria-filme/service/filmeService')
    filmeService.register(router, '/filme')
    
    // usuario Routes
    const filmeService = require('../api/categoria-filme/service/usuarioService')
    filmeService.register(router, '/usuario')
}