module.exports = function middlewareGlobal(req, res, next) {
  console.log()
  console.log('passei no middleware global')
  console.log()

  if (req.body.cliente) {
    console.log(`o cliente ${req.body.cliente} foi postado`);
  }

  next()
}