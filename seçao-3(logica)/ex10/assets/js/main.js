const paragrafos = document.querySelector('.paregrafos')
const ps = document.querySelectorAll('p')
const estilosBody = getComputedStyle(document.body)
const backgroundBody = estilosBody.backgroundColor

for (let p of ps) {
  p.style.backgroundColor = backgroundBody
  p.style.color = '#FFF'
  p.style.borderRadius = '25px'
  p.style.padding = '20px'
}