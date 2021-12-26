function Produto (nome, preco, estoque) {
  this.nome = nome
  this.preco = preco

  Object.defineProperty(this, 'estoque', {
    enumerable: true, //mostra a chave em loop
    value: estoque, // valor
    writable: true, // pode alterar o valor
    configurable: false // pode reconfigurar a propriedade e deletar
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

Object.defineProperty()
const produto1 = new Produto('camiseta', 20, 3)
console.log(produto1)