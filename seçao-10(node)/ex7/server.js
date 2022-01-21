const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
  nome: <input type="text" name="nome">
  <button>enviar</button>
  </form>
  `)
})

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(`oque me enviou foi: ${req.body.nome}`)
})

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(req.params)
})

app.listen(3000, () => {
  console.log('acessar: http://localhost:3000')
  console.log('servidor está sendo executado na porta 3000')
})