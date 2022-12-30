// validador de cpf com classes
/* 
  705.484.450 - 52

  7  0  5  4  8  4  4  5  0
  X  X  X  X  X  X  X  X  X
  10 9  8  7  6  5  4  3  2 = 237

  11 - (237 % 11) = 5(Primeiro digito)
  se o digito for maior que 9 se considera 0

  7  0  5  4  8  4  4  5  0  5
  X  X  X  X  X  X  X  X  X  X
  11 10 9  8  7  6  5  4  3  2 = 284

  11 - (284 % 11) = 2(Segundo digito)
  se o digito for maior que 9 se considera 0
*/
class ValidaCpf {
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo',  {
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
    const cpfSemDigitos =  this.cpfLimpo.slice(0, -2)
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
const valida = new ValidaCpf('705.484.450 - 52')
console.log(valida.valida());