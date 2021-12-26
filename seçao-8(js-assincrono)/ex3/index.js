//  Async / Await

function aleatorio(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}


function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject('ERRO!!!!!!!!!!!!!')
      return
    }

    setTimeout(() => {
      resolve(msg.toUpperCase())
      return
    }, tempo);
  })
}

// espera('fase 1', aleatorio(0, 3))
//   .then(valor => {
//     console.log(valor);
//     return espera('fase 2', aleatorio(0, 3))
//   })
//   .then(fase => {
//     console.log(fase);
//     return espera('fase 3', aleatorio(0, 3))
//   })
//   .then(fase => console.log(fase))
//   .catch(err => console.error(err))


async function executa() {
  try {
    const fase1 = await espera('fase 1', aleatorio(0, 3))
    console.log(fase1)

    const fase2 = await espera('fase 2', aleatorio(0, 3))
    console.log(fase2)

    const fase3 = await espera(2, aleatorio(0, 3))
    console.log(fase3)


  } catch (error) {
    console.log(error);
  }

}

executa()