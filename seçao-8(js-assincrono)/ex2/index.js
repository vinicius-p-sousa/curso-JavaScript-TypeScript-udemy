//  Metodos Uteis Para Promises
// promise.all promise.race promice.resolve promise.reject

function aleatorio(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}


function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject(new Error)
      return
    }
    setTimeout(() => {
      resolve(msg.toUpperCase())
      return
    }, tempo);
  })
}

function baixaPagina() {
  const emCache = false
  if (emCache) {
    return Promise.resolve("pagina em Cache")
  } else {
    espera('baixando', aleatorio(1, 3))
  }
}

baixaPagina().then( dadosPagina => {
  console.log(dadosPagina);
}).catch( e => console.log(e))

// const promises = [
//   espera('promise 1', aleatorio(1, 5)),
//   espera('promise 2', aleatorio(1, 5)),
//   espera('promise 3', aleatorio(1, 5)),
//   // espera(1000, 1000),
// ]

// Promise.race(promises).then((valor) => {
//   console.log(valor);
// }).catch((err) => {
//   console.log(err);
// })

// Promise.all(promises).then((valor) => {
//   console.log(valor);
// }).catch((err) => {
//   console.log(err);
// })

