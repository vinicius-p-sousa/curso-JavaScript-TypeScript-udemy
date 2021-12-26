/*
const date = new Date(1631737857874)//esse numero foi o numero da hora do de cima
console.log(`dia ${date.getDate()}`);
console.log(`mes ${date.getMonth()}`);//mes começa de zero
console.log(`ano ${date.getFullYear()}`);
console.log(`hora ${date.getHours()}`);
console.log(`min ${date.getMinutes()}`);
console.log(`seg ${date.getSeconds()}`);
console.log(`ms ${date.getMilliseconds()}`);
console.log(`dia semana ${date.getDay()}`);//domingo e dia 0
console.log(Date.now());
*/

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`
}

function formetaData(data) {
  const dia = data.getDate()
  const mes = data.getMonth()
  const ano = data.getFullYear()
  const hora = data.getHours()
  const min = data.getMinutes()
  const seg = data .getSeconds()

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
} 

const data = new Date()
const dataBrasil = formetaData(data)
console.log(dataBrasil);
