// reduce 

// Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const soma = numeros.reduce((acumulador, valor) => acumulador += valor)

const pares = numeros.reduce((acumulador, valor) => {
  if (valor % 2 === 0) {
    acumulador += valor
  }
  return acumulador
},0)

const dobros = numeros.reduce((acumulador, valor) => {
  acumulador.push(valor * 2)
  return acumulador
}, [])

// Retorne a pessoa mais velha
const pessoas = [
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Luiz', idade: 62 },
  { nome: 'Leticia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
]

const maisVelho = pessoas.reduce((acumulador, valor) => {
  if (acumulador.idade > valor.idade) return acumulador
  return valor
})

console.log(maisVelho);