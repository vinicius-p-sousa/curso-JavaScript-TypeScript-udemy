// objeto map

const pessoas = [
  { id: 3, nome: 'vinicius' },
  { id: 2, nome: 'maria' },
  { id: 1, nome: 'luiz' }
]

const novasPessoas = new Map()
for (const pessoa of pessoas) {
  const { id } = pessoa
  novasPessoas.set(id, {...pessoa})
}
console.log(novasPessoas);