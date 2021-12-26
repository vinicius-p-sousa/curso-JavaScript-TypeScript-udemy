const date = new Date('2004-06-11 03:00:00')
const diaSemana = date.getDay()
let diaSemanaTexto = getDayWeek(diaSemana)

function getDayWeek(Day) {
  let diaSemanaTexto

  switch (Day) {
  case 0:
    diaSemanaTexto = 'Domingo'
    return diaSemanaTexto
  case 1:
    diaSemanaTexto = 'Segunda'
    return diaSemanaTexto
  case 2:
    diaSemanaTexto = 'Terça'
    return diaSemanaTexto
  case 3:
    diaSemanaTexto = 'Quarta'
    return diaSemanaTexto
  case 4:
    diaSemanaTexto = 'Quinta'
    return diaSemanaTexto
  case 5:
    diaSemanaTexto = 'Sexta'
    return diaSemanaTexto
  case 6:
    diaSemanaTexto = 'Sábado'
    return diaSemanaTexto
  default :
    diaSemanaTexto = 'nada'
    return diaSemanaTexto
}
}


console.log(diaSemanaTexto, diaSemana);