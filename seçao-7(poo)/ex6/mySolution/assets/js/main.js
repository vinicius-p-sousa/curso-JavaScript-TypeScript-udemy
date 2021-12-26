
class ValidaCpf {
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false,
      enumerable: false,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, '')
    })
  }

  eSequencia() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
  }

  geraNovoCpf() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2)
    const digito1 = ValidaCpf.geraDigito(cpfSemDigitos)
    const digito2 = ValidaCpf.geraDigito(cpfSemDigitos + digito1)
    this.novoCpf = cpfSemDigitos + digito1 + digito2
  }

  static geraDigito(cpfSemDigito) {
    let total = 0
    let reverso = cpfSemDigito.length + 1

    for (let stringNumerica of cpfSemDigito) {
      total += reverso * Number(stringNumerica)
      reverso--
    }

    const digito = 11 - (total % 11)
    return digito <= 9 ? String(digito) : '0'
  }

  valida() {
    if (!this.cpfLimpo) return false
    if (typeof this.cpfLimpo !== 'string') return false
    if (this.cpfLimpo.length !== 11) return false
    if (this.eSequencia()) return false
    this.geraNovoCpf()

    return this.novoCpf === this.cpfLimpo
  }
}

function verificarCamposVazios(objectToSave) {
  for (input of form) {
    if (input.value === '') return alert(`Campo ${input.name} vazio`)
    if (input.name === 'send-btn') return
    Object.defineProperty(objectToSave, String(input.name), { value: input.value })
  }
  return objectToSave
}

function verificarUsuario(usuario) {
  for (letra of usuario) {
    if (!(/[A-Za-z0-9]/.test(letra))){ 
      alert('Usuario deve conter apenas letras e numeros')
      return false
    }
  }
  if (usuario.length < 3 || usuario.length > 12) {
    alert('usuario deve ser maior que 3 e menor que 12')
    return false
  }
  return true
}

function verificarSenha(senha, repetirSenha) {
  if (senha.length < 6 || senha.length > 12) {
    alert('senha deve ser maior que 6 e menor que 12')
    return false
  }
  if (senha !== repetirSenha) {
    alert('as senhas devem ser iguais')
    return false
  }
  return true
}

function enviarFormulario() {
  let inputs = {}
  if (verificarCamposVazios(inputs)) return false
  verificarUsuario(inputs.usuario)
  if (verificarSenha(inputs.senha, inputs.repetirSenha)) return false
  let cpf = new ValidaCpf(inputs.cpf)
  if (!(cpf.valida())) {
    alert('cpf invalido')
    return false
  }
  console.log('formulario enviado');
}
