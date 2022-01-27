const express = require('express')
const route = express.Router()
const homeControler = require('./controllers/homeController')
const contatoControler = require('./controllers/contatoControler')

route.get('/', homeControler.paginaInicial)
route.post('/', homeControler.trataPost)


route.get('/contato', contatoControler.paginaInicial)
module.exports = route