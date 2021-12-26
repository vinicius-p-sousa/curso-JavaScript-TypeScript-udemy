// Herança com classes
class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome
    this.ligado = false
  }

  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} já esta Ligado`)
      return
    }
    console.log(`${this.nome} já foi Ligado`)
    this.ligado = true
  }

  desligar() {
    if (!this.ligado) {
      console.log(`${this.nome} já esta Desligado`)
      return
    }
    console.log(`${this.nome} já foi Desligado`)
    this.ligado = false
  }

}

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome)

    this.cor = cor
    this.modelo = modelo
  }
}


const d1 = new Smartphone('Nokia', 'preto', 'tijolão')
console.log(d1.ligado)

d1.ligar()
d1.ligar()
d1.desligar()

console.log(d1.ligado)
