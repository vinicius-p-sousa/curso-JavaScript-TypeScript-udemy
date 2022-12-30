const Contact = require('../models/ContactModel')
exports.index = (req, res) => {
    console.log(req.session.user._id);
    res.render('contact', { contact: {}, userId: req.session.user._id })
}

exports.register = async (req, res) => {
    try {
        const contact = new Contact(req.body)
        await contact.register()

        if (contact.errors.length > 0) {
            req.flash('errors', contact.errors)
            req.session.save(function () {
                return res.redirect('/contact')
            })
            return
        }

        req.flash('success', 'seu contato foi criado com sucesso')
        req.session.save(function () {
            return res.redirect(`/contact/edit/${contact.contact._id}`)
        })
    } catch (error) {
        console.log(error)
        return res.render('404')
    }
}

exports.editContact = async function (req, res) {
    if (!req.params.id) return res.render('404')
    let contact = await Contact.findById(req.params.id)
    if (!contact) return res.render('404')

    res.render('contact', { contact, userId: req.session.user._id })
}

exports.edit = async function (req, res) {
    try {
        if (!req.params.id) return res.render('404')
        const contact = new Contact(req.body)
        await contact.edit(req.params.id)
        if (contact.errors.length > 0) {
            req.flash('errors', contact.errors)
            req.session.save(function () {
                console.log(contact);
                return res.redirect(`/contact/edit/${req.params.id}`)
            })
            return
        }

        req.flash('success', 'seu contato editado com sucesso')
        req.session.save(function () {
            return res.redirect(`/contact/edit/${contact.contact._id}`)
        })
    } catch (error) {
        console.log(error);
        res.render('404')
    }

}

exports.delete = async function (req, res) {
    if (!req.params.id) return res.render('404')

    let contact = await Contact.delete(req.params.id)
    if (!contact) return res.render('404')

    req.flash('success', 'seu contato foi excluido com sucesso')
    req.session.save(function () {
        return res.redirect('/')
    })
}