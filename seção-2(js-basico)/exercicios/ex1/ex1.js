const nome = 'Vinicius'
const sobrenome = 'Pereira'
let idade = 17
const peso = 110
const alturaEmMetros = 1.75

let imc = peso / (alturaEmMetros * alturaEmMetros)
let anoNascimento = 2021 - idade

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso,'kg e nasceu no ano de' ,anoNascimento)

console.log('tem', alturaEmMetros, 'de altura e seu IMC é de ', imc)