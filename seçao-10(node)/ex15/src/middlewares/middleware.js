module.exports = function middlewareGlobal(req, res, next) {
  res.locals.varLocal = 'Este é o valor da var local!'
  next()
}