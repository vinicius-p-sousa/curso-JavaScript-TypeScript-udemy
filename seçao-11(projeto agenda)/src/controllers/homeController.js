const Contact = require('../models/ContactModel')

exports.index = async (req, res) => {
    let contacts = await Contact.findContacts(req.session.user._id)
    console.log(contacts);
    res.render('index', { contacts, })
    return
}
