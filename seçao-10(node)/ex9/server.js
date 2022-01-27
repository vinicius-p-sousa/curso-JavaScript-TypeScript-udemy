const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')

app.use(express.urlencoded({ extended: true }))
app.use(routes)
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.listen(3000, () => {
  console.log('acessar: http://localhost:3000')
  console.log('servidor está sendo executado na porta 3000')
})