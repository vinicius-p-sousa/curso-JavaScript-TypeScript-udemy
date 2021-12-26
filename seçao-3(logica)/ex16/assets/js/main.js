// criar um timer usando setTimeout

const timer = document.querySelector('.timer')
let intervalOfTimer;
let controlOfTimer = 0


function formatDate(seconds) {
  const date = new Date(seconds * 1000)
  return date.toLocaleTimeString('pt-BR', { hour12: false, timeZone: 'UTC' })
}

document.addEventListener('click', function(event) {
  let element = event.target

  if (element.classList.contains('iniciar')) {
    clearInterval(intervalOfTimer)
    intervalOfTimer = setInterval(() => {
      timer.innerHTML = formatDate(controlOfTimer++)
      timer.style.color = '#fff'
    }, 1000);

  }

  else if (element.classList.contains('pausar')) {
    clearInterval(intervalOfTimer)
    timer.style.color = '#ff0000'

  } else if (element.classList.contains('zerar')) {
    clearInterval(intervalOfTimer)
    timer.innerHTML = '00:00:00'
    timer.style.color = '#ffae00'
    controlOfTimer = 0

  }
})
