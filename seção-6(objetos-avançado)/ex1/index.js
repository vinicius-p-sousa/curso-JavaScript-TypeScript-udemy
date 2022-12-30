function Produto (nome, preco, estoque) {
  this.nome = nome
  this.preco = preco
  let estoquePrivado = estoque

  Object.defineProperty(this, 'estoque', {
    enumerable: true, //mostra a chave em loop
    configurable: false, // pode reconfigurar a propriedade e deletar
    
    get: (valor) => estoquePrivado,

    set: function(valor) {
      if (typeof valor !== 'number') {
        console.log('Bad Value')
        return
      }
      
      estoquePrivado = valor

    }
  })

  Object.defineProperties(this, {
    nome: {
      enumerable: true, //mostra a chave em loop
      value: nome, // valor
      writable: false, // pode alterar o valor
      configurable: false // pode reconfigurar a propriedade e deletar}
    },
    preco: {
      enumerable: true, //mostra a chave em loop
      value: preco, // valor
      writable: true, // pode alterar o valor
      configurable: false // pode reconfigurar a propriedade e deletar}
    }
})}

const produto1 = new Produto('camiseta', 20, 3)
produto1.estoque = 500
console.log(produto1.estoque)