const HomeModel = require('../models/HomeModel')

HomeModel.create({
    titulo: 'outro teste',
    descricao: 'apenas mais um teste',
})
    .then((dados) => console.log(dados))
    .catch((e) => console.log(e))

exports.paginaInicial = (req, res) => {
    res.render('index')
    return
}

exports.trataPost = (req, res) => {
    res.send(req.body)
    return
}
