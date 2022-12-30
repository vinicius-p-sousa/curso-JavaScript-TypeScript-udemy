const axios =  require('axios')
const { Pessoa } = require('./module1')
// const module1 = require('./module1')
// const { nome,   sobrenome, falaNome} = require('./module1')
// const falaNome = require('./module1').falaNome

// axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
//   .then(response => console.log(response.data))
//   .catch(e => console.log('ERRO: ', e))

const pessoa = new Pessoa('vini')
console.log(pessoa);