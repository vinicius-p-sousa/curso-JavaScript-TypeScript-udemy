/*
 705.484.450-52

 7  0  5  4  8  4  4  5  0
 X  X  X  X  X  X  X  X  X
 10 9  8  7  6  5  4  3  2 = 237

 11 - (237 % 11) = 5 (Primeiro digito)
 se o digito for maior que 9 se considera 0
 
 7  0  5  4  8  4  4  5  0  5
 X  X  X  X  X  X  X  X  X  X
 11 10 9  8  7  6  5  4  3  2 = 284

 11 - (284 % 11) = 2 (Segundo digito)
 se o digito for maior que 9 se considera 0
*/
function ValidaCpf(cpfEnviado) {
  Object.defineProperty(this, 'cpfLimpo', {
    get: function () {
      return cpfEnviado.replace(/\D+/g, '')
    }
  })
}

ValidaCpf.prototype.valida = function() {
  if (typeof this.cpfLimpo === 'undefined' || this.cpfLimpo.length !== 11 ) return false
  if (this.isSequencial()) return false

  const cpfParcial = this.cpfLimpo.slice(0, -2)
  
  const digito1 = this.criaDigito(cpfParcial)
  const digito2 = this.criaDigito(cpfParcial + digito1)
  const novoCpf = cpfParcial + digito1 + digito2

  return novoCpf === this.cpfLimpo
}

ValidaCpf.prototype.criaDigito = function(cpfParcial) {
  const cpfArray = Array.from(cpfParcial)
  let regressivo = cpfArray.length + 1
  const total = cpfArray.reduce((ac, val) => {
    ac += (regressivo * Number(val))
    regressivo--
    return ac
  }, 0)

  const digito = 11 - (total % 11)
  return digito > 9 ? '0' : String(digito)
}

ValidaCpf.prototype.isSequencial = function() {
  return (this.cpfLimpo[0].repeat(this.cpfLimpo.length)) === this.cpfLimpo 
}

const cpf = new ValidaCpf('705.484.450-52')
console.log(cpf.valida());
