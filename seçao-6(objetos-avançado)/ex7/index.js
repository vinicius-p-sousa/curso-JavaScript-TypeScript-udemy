// Factory Functions + Prototypes

function criaPessoa(nome, sobrenome) {
  const pessoaPrototype = {
    falar() {
      console.log(`${this.nome} está falando`);
    },

    comer() {
      console.log(`${this.nome} está comendo`);
    },

    beber() {
      console.log(`${this.nome} está comendo`);
    }
  }
  
  return Object.create(pessoaPrototype, {
    nome: {
      writable: true,
      value: nome,
      enumerable: true,
      configurable: true
    
    },

    sobrenome: {
      writable: true,
      value: sobrenome,
      enumerable: true,
      configurable: true
    }
  })
}

let p1 = criaPessoa('pessoa1', 'da silva')
let p2 = criaPessoa('pessoa2', 'da silva')
let p3 = criaPessoa('pessoa3', 'da silva')
p1.falar()
p2.comer()
p3.beber()