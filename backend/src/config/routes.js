const express = require('express')

module.exports = function(server){

    //API ROUTER
    const router = express.Router()
    server.use('/api', router)

    const todoService = require('../Api/todo/todoService')
    todoService.register(router, './todos')
}