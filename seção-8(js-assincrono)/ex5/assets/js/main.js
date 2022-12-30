// fecth

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado')
  resultado.innerHTML = response
}

async function carregaPagina(el) {
  const href = el.getAttribute('href')
  try {
    const response = await fetch(href)
    if (response.status !== 200) throw new Error('ERRO 404!')
    const html = await response.text()
    carregaResultado(html)
  } catch (error) {
    console.warn(error);
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