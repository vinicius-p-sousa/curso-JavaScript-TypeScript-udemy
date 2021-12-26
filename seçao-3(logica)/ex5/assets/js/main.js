function horaAtual() {

  // const data = new Date()

  // function formataData(data) {
  //   const semana = data.getDay()
  //   const dia = data.getDate()
  //   const mes = data.getMonth()
  //   const ano = data.getFullYear()
  //   const hora = data.getHours()
  //   const min = data.getMinutes()

  //   return [semana, dia, mes, ano, hora, min]
  // }

  // function diaSemana(dia) {
  //   switch (dia) {
  //     case 0:
  //       return 'Domingo'

  //     case 1:
  //       return 'Segunda'

  //     case 2:
  //       return 'Terça'

  //     case 3:
  //       return 'Quarta'

  //     case 4:
  //       return 'Quinta'

  //     case 5:
  //       return 'Sexta'

  //     case 6:
  //       return 'Sábado'

  //     default:
  //       return 'Dia indentificado'
  //   }
  // }

  // function getMes(mes) {
  //   switch (mes) {
  //     case 0:
  //       return 'Janeiro'

  //     case 1:
  //       return 'Fevereiro'

  //     case 2:
  //       return 'Março'

  //     case 3:
  //       return 'Abriu'

  //     case 4:
  //       return 'Maio'

  //     case 5:
  //       return 'Junho'

  //     case 6:
  //       return 'Julho'

  //     case 7:
  //       return 'Agosto'

  //     case 8:
  //       return 'Setembro'

  //     case 9:
  //       return 'Outubro'

  //     case 10:
  //       return 'Novembro'

  //     case 11:
  //       return 'Dezembro'

  //     default:
  //       return 'Mês indentificado'
  //   }
  // }

  // function addZero(num) {
  //   return num >= 10 ? num : `0${num}`
  // }

  // function escreve(semana, dia, mes, ano, hora, minuto) {
  //   return `Hoje é ${semana}, ${dia} de ${mes} de ${ano}, as ${hora}:${minuto}`
  // }

  // function escreveHtml(e) {
  //   const classe = document.querySelector('.hora')
  //   classe.innerHTML = e
  // }

  // const dataAtual = formataData(data)
  // const semanaAtual = diaSemana(dataAtual[0])
  // const diaAtual = dataAtual[1]
  // const mesAtual = getMes(dataAtual[2])
  // const anoAtual = dataAtual[3]
  // const horaAtual = addZero(dataAtual[4])
  // const minAtual = addZero(dataAtual[5])

  // const resultado = escreve(semanaAtual, diaAtual, mesAtual, anoAtual, horaAtual, minAtual)
  // escreveHtml(resultado)

}
const h1 = document.querySelector('.hora')
const data = new Date
const options = { dateStyle: 'full', timeStyle: 'short'};
h1.innerHTML = data.toLocaleString('pt-BR', options)

