const Login = require('../models/LoginModel')

exports.index = (req, res) => {
    if (req.session.user) {
        return res.render('account-logged')
    }
    res.render('account')
    return
}

exports.register = async (req, res) => {
    try {
        const login = new Login(req.body)
        await login.register()

        if (login.errors.length > 0) {
            req.flash('errors', login.errors)
            req.session.save(function () {
                return res.redirect('/account')
            })
            return
        }
        req.flash('success', 'seu usuario foi criado com sucesso')
        req.session.user = login.user
        req.session.save(function () {
            return res.redirect('/')
        })
    } catch (error) {
        console.log(error)
        return res.render('404')
    }
}

exports.login = async (req, res) => {
    try {
        const login = new Login(req.body)
        await login.login()

        if (login.errors.length > 0) {
            req.flash('errors', login.errors)
            req.session.save(function () {
                return res.redirect('/account')
            })
            return
        }

        req.flash('success', 'voce entrou no sistema')
        req.session.user = login.user
        req.session.save(function () {
            return res.redirect('/')
        })
    } catch (error) {
        console.log(error)
        return res.render('404')
    }
}

exports.logout = (req, res) => {
    req.session.destroy()
    res.redirect('/account')
}