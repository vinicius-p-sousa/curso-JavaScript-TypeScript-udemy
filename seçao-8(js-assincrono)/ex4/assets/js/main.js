// XMLHttpRequest
const request = obj => {
  const xhr = new XMLHttpRequest()
  return new Promise((resolve, reject) => {
    xhr.open(obj.method, obj.url, true)
    xhr.send()
    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText)
      } else {
        reject(xhr.statusText)
      }
    })
  })

}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado')
  resultado.innerHTML = response
}

async function carregaPagina(el) {
  const href = el.getAttribute('href')
  let requestObj = ({
    method: 'GET',
    url: href,
  })

  try {
    let resultado = await request(requestObj)
    carregaResultado(resultado)
  } catch (error) {
    console.warn(error)
  }

}

document.addEventListener('click', e => {
  const el = e.target
  const tag = el.tagName.toLowerCase()

  if (tag === 'a') {
    e.preventDefault()
    carregaPagina(el)
  }
})