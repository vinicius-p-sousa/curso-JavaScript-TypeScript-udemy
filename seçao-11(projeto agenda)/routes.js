const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const loginController = require('./src/controllers/loginController')
const contactController = require('./src/controllers/contactController')

const { loginRequired } = require('./src/middlewares/middleware')

// homa rotes 
route.get('/', loginRequired, homeController.index)

// account rotes 
route.get('/account', loginController.index)
route.post('/account/register', loginController.register)
route.post('/account/login', loginController.login)
route.get('/account/logout', loginController.logout)

// contact rotes 
route.get('/contact', loginRequired, contactController.index)
route.post('/contact/register', loginRequired, contactController.register)
route.get('/contact/edit/:id', loginRequired, contactController.editContact)
route.post('/contact/edit/:id', loginRequired, contactController.edit)
route.get('/contact/delete/:id', loginRequired, contactController.delete)

module.exports = route