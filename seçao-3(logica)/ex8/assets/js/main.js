function escreve(array=[]) {
  const container = document.querySelector('.container')
  const div = document.createElement('div')
  
  for ( let i = 0; i < array.length; i++ ) {
    const { tag, texto } = array[i]
    const novoElemento = document.createElement(tag)
    
    novoElemento.innerText = texto
    div.appendChild(novoElemento)
  }
  
  container.appendChild(div)
}

const elementos = [
  {tag: 'p', texto: 'este é o paragrafo'},
  {tag: 'div', texto: 'esta é a div'},
  {tag: 'section', texto: 'uma section'},
  {tag: 'footer', texto: 'footer aqui'}
]
escreve(elementos)