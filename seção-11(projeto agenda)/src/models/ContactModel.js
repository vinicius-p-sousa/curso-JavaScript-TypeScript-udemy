const mongoose = require('mongoose')
const validator = require('validator')

const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    tel: { type: String, required: false, default: '' },
    createdIn: { type: Date, default: Date.now },
    createdBy: { type: String, required: true },
})

const ContactModel = mongoose.model('Contact', ContactSchema)

function Contact(body) {
    this.body = body
    this.errors = []
    this.contact = null
}

Contact.prototype.register = async function (userId) {
    this.valida()
    if (this.errors.length > 0) return
    this.contact = await ContactModel.create(this.body)

}

Contact.prototype.valida = function () {
    this.cleanUp()
    if (!this.body.name) this.errors.push('Nome é obrigatorio')
    if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push('e-mail inválido.')
    if (!this.body.email && !this.body.tel) this.errors.push('Telefone ou E-mail deve ser enviado.')
}


Contact.prototype.cleanUp = function () {
    for (let key in this.body) {
        if (typeof this.body[key] !== 'string') {
            this.body[key] = ''
        }
    }

    this.body = {
        name: this.body.name,
        surname: this.body.surname,
        email: this.body.email,
        tel: this.body.tel,
        createdBy: this.body.createdBy
    }
}

Contact.prototype.edit = async function (id) {
    if (typeof id !== 'string') return
    this.valida()
    if (this.errors.length > 0) return
    this.contact = await ContactModel.findByIdAndUpdate(id, this.body, { new: true })
}

// static methods
Contact.findById = async function (id) {
    if (typeof id !== 'string') return
    const contact = await ContactModel.findById(id)
    return contact
}

Contact.findContacts = async function (userId) {
    const contacts = await ContactModel.find({ createdBy: userId })
        .sort({ createdIn: -1 })
    return contacts
}

Contact.delete = async function (id) {
    if (typeof id !== 'string') return
    let contact = await ContactModel.findOneAndDelete({ _id: id })
    return contact
}


module.exports = Contact