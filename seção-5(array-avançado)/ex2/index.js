// map

// dobre os numeros
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosDobro = numeros.map(valor => valor * 2)

// console.log(numerosDobro);


// Para cada elemento
// Retorne apenas uma sting como o nome da pessoa
// Remova apenas as chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
  { nome: 'Luiz', idade: 62},
  { nome: 'Maria', idade: 23},
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Leticia', idade: 19},
  { nome: 'Rosana', idade: 32},
  { nome: 'Wallace', idade: 47},
]

const nomes = pessoas.map(valor => valor.nome)
console.log(nomes);

const idades = pessoas.map(obj => ({idade: obj.idade}))
console.log(idades);

const ids = pessoas.map((obj, index) => {
  const newObj = {...obj}
  newObj.id = index + 1
  return newObj
})
console.log(ids);
console.log(pessoas);