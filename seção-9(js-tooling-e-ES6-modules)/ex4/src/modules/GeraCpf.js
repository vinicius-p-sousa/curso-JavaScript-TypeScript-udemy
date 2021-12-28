import ValidaCpf from "./ValidaCpf";

export default class GeraCpf {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min))
  }

  formatado(cpf) {
    return (
      cpf.slice(0, 3) + '.' +
      cpf.slice(3, 6) + '.' +
      cpf.slice(6, 9) + '-' +
      cpf.slice(9, 11)
    )
  }

  geraNovoVpf() {
    const cpfSemDigito = this.rand()
    console.log(cpfSemDigito);
    const digito1 = ValidaCpf.geraDigito(cpfSemDigito)
    const digito2 = ValidaCpf.geraDigito(cpfSemDigito + digito1)
    const novoCpf = cpfSemDigito + digito1 + digito2
    return this.formatado(novoCpf)
  }

}