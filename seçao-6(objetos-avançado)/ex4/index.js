// Produto -> aumento, desconto
function Produto(nome, preco) {
  this.nome = nome
  this.preco = preco
}

Produto.prototype.aumeto = function(quantia) {
  this.preco += quantia
}

Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia
}

function Camiseta(nome, preco, cor) {
 Produto.call(this, nome, preco) 
}

p1 = new Camiseta('cu', 500)
console.log(p1);
// p1.aumeto(100)
// console.log(p1);
// p1.desconto(500)
// console.log(p1);
