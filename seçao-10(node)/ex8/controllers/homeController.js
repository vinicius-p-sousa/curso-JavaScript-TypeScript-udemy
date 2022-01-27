exports.paginaInicial = (req, res) => {
  res.send(`
  <form action="/" method="POST">
  nome: <input type="text" name="nome">
  <button>enviar</button>
  </form>
  `)
}

exports.trataPost = (req, res) => {
  res.send(req.body)
}