const path = require('path')
const escrever = require('./modules/escrever')
const ler = require('./modules/ler')

const caminhoArquivo = path.resolve(__dirname, 'dados.json')
const pessoas = [
  { nome: 'joao' },
  { nome: 'vinicius' },
  { nome: 'angelica' },
  { nome: 'beatriz' },
  { nome: 'pedro' },
  { nome: 'renato' },
  { nome: 'isabely' }
]

const json = JSON.stringify(pessoas, '', 2)
escrever(caminhoArquivo, json)

async function lerArquivo(caminho) { 
  const dados = await ler(caminho)
  renderizaDados(dados)
}

function renderizaDados (dados) {
  dados = JSON.parse(dados)

  dados.forEach(valor => {
    console.log('meu nome é ' + valor.nome);
  });
}

lerArquivo(caminhoArquivo)