//  Promises

function aleatorio(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}


function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject(new Error)
    }
    setTimeout(() => {
      resolve(msg)
    }, tempo);
  })
}


espera('coisa 1', aleatorio(1, 3))
  .then((resposta) => {
    console.log(resposta)
    return espera('coisa 2', aleatorio(1, 3))
  })
  .then(resposta => {
    console.log(resposta)
    return espera(3, aleatorio(1, 3))
  })
  .then(resposta => {
    console.log(resposta)
  })
  .catch(e => {
    console.log('ERRO: ', e);
  })