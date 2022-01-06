// const nome = 'vinicius'
// const sobrenome = 'pereira'

// const falaNome = () => nome + ' ' + sobrenome

// module.exports.nome = nome
// exports.sobrenome = sobrenome
// this.falaNome = falaNome

class Pessoa {
  constructor(nome) {
    this.nome = nome
  }
}

const idade = 17
const sexo = 'masculino'

module.exports = {
  idade, sexo, Pessoa
}
