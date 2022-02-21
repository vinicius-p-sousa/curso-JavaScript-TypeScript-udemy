const mongoose = require('mongoose')
const validator = require('validator')
const bcryptjs = require('bcryptjs')

const LoginSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
})

const LoginModel = mongoose.model('Login', LoginSchema)

class Login {
    constructor(body) {
        this.body = body
        this.errors = []
        this.user = null
    }

    async register() {
        this.valida()
        if (this.errors.length > 0) return

        await this.userExists()
        if (this.errors.length > 0) return

        const salt = bcryptjs.genSaltSync()
        this.body.password = bcryptjs.hashSync(this.body.password, salt)
        this.user = await LoginModel.create(this.body)
    }

    async login() {
        this.valida()
        if (this.errors.length > 0) return
        this.user = await LoginModel.findOne({ email: this.body.email })

        if (!this.user) {
            this.errors.push('usuario invalido')
            return
        }
        if (!bcryptjs.compareSync(this.body.password, this.user.password)) {
            this.user = null
            this.errors.push('senha invalida')
            return
        }
    }


    valida() {
        this.cleanUp()
        if (this.body.username) {
            if (this.body.username.length < 2 || this.body.username.length > 20) this.errors.push('usuario deve ter entre 2 e 20 caracteres.')
        }
        if (!validator.isEmail(this.body.email)) this.errors.push('e-mail inválido.')

        if (this.body.password.length < 3 || this.body.password.length >= 50) this.errors.push('senha invalida, precisa ter entre 3 e 50 caracteres.')
    }

    async userExists() {
        const user = await LoginModel.findOne({ email: this.body.email })
        if (user) this.errors.push('usuario com esse email já existe')
    }

    cleanUp() {
        for (let key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = ''
            }
        }

        this.body = {
            username: this.body.username,
            email: this.body.email,
            password: this.body.password
        }

    }
}

module.exports = Login
