// getter e setter
const velocidadeSimbolica = Symbol()
class Carro {
  constructor(nome, velocidade) {
    this.nome = nome
    this[velocidadeSimbolica] = 0
  }

  set velocidade(valor) {
    console.log('SETTER');
    if (typeof valor !== 'number') return
    if (valor > 100 || valor < 0) return
    this[velocidadeSimbolica] = valor
  }

  get velocidade() {
    return this[velocidadeSimbolica]
  }

  acelerar() {
    if (this[velocidadeSimbolica] >= 100) return
    this[velocidadeSimbolica]++
    console.log(`sua velocidade agora é ${this[velocidadeSimbolica]}`);
  }

  frear() {
    if (this[velocidadeSimbolica] <= 0) return
    this[velocidadeSimbolica]--
    console.log(`sua velocidade agora né ${this[velocidadeSimbolica]}`);
  }
}

const fusca = new Carro('Fusca', 1500);
console.log(fusca.velocidade)

for (let i = 0; i <= 200; i++) {
  fusca.acelerar( )
}


fusca.velocidade = 1000
console.log(fusca.velocidade)
fusca.velocidade = 69
console.log(fusca.velocidade)
