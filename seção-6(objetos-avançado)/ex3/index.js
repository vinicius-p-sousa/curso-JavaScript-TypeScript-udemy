function Produto(nome, preco) {
  this.nome = nome
  this.preco = preco
}


Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumenta = function (percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100))
}

// desta forma o proto produto1 do produto1 é Produto.prototype
let produto1 = new Produto('caneca', 15)

// se chamar a func aumenta vai dar erro pois essa função não esta ná no prototype dela

let produto2 = {
  nome: 'carro',
  preco: 100000
}

Object.setPrototypeOf(produto2, Produto.prototype)

// agora se chamar a função aumenta vai funcionar normalmente

produto2.aumenta(100)
console.log(produto2);