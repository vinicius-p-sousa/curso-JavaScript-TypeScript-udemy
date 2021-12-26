class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector('.formulario')
    this.eventos()
  }

  eventos() {
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e)
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const camposValidos = this.camposValidos()
    const senhaValidas = this.senhaValida()

    if (camposValidos && senhaValidas) {
      alert('Formulario enviado')
      this.formulario.submit()
    }
  }

  camposValidos() {
    let valid = true

    for (let errorText of this.formulario.querySelectorAll('.error-text')) {
      errorText.remove()
    }

    for (let campo of this.formulario.querySelectorAll('.validar')) {
      if (!campo.value) {
        this.criaErro(campo, `campo ${campo.name} não pode estar em branco`)
        valid = false
      }

      if (campo.classList.contains('cpf')) {
        if (!this.validaCPF(campo)) valid = false
      }

      if (campo.classList.contains('usuario')) {
        if (!this.validaUsuario(campo)) valid = false
      }

    }

    return valid
  }

  senhaValida() {
    let valid = true

    const senha = this.formulario.querySelector('.senha')
    const repetirSenha = this.formulario.querySelector('.repetir-senha')

    if (senha.value !== repetirSenha.value) {
      valid = false
      this.criaErro(senha, 'Campos das senhas precisam ser iguais')
      this.criaErro(repetirSenha, 'Campos das senhas precisam ser iguais')
    }

    if (senha.value.length < 6 || senha.value.length > 12) {
      valid = false
      this.criaErro(senha, 'senha precisa ter entre 6 e 12 caracteres')
    }

    return valid
  }

  validaUsuario(campo) {
    let valid = true
    const usuario = campo.value
    if (usuario.length < 3 || usuario.length > 12) {
      this.criaErro(campo, `usuario deve ter entre 3 e 12 caracteres`)
      valid = false
    }

    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(campo, 'nome de usuario precisa conter apenas letras e/ou números.')
      valid = false
    }

    return valid
  }

  validaCPF(campo) {
    const cpf = new ValidaCpf(campo.value)

    if (!cpf.valida()) {
      this.criaErro(campo, 'CPF invalido')
      return false
    }
    return true
  }

  criaErro(campo, msg) {
    const div = document.createElement('div')
    div.innerHTML = msg
    div.classList.add('error-text')
    campo.insertAdjacentElement('afterend', div)
  }
}

const valida = new ValidaFormulario()