const pessoa = {
  nome: 'vinicius',
  idade: 17,
  endereco: [{
    rua: 'Rua Das Cariotas',
    numero: 140,
    complemento: 'c'
  }]
}


const {nome, idade, endereco: [{complemento}]} = pessoa
console.log(nome, idade, complemento)