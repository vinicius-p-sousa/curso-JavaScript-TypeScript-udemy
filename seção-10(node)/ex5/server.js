const express = require('express')
const app = express()

app.get('/' , (req, res) => {
  res.send(`
  <form action="/" method="POST">
  nome: <input type="text" name="nome">
  <button>enviar</button>
  </form>
  `)
})

app.post('/', (req, res) => {
  res.send('Recebi o formulario')
})

app.get('/contato', (req, res) => {
  res.send('esta é a pagina de contato')
})

app.listen(3000, () => {
  console.log('acessar: http://localhost:3000')
  console.log('servidor está sendo executado na porta 3000')
})