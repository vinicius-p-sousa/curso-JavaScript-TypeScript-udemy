const HomeModel = require('../models/HomeModel')


exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'Este é o titulo',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 7, 9]
    })
    return
}

exports.trataPost = (req, res) => {
    res.send(req.body)
    return
}
