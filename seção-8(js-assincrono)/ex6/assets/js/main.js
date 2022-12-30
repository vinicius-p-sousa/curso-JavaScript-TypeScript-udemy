// fetch e axios
axios('pessoas.json')
  .then(resposta => carregaElementosNaPagina(resposta.data))

  
  function carregaElementosNaPagina (json) {
    const table = document.createElement('table')
    for (const pessoa of json) {
      const tr = document.createElement('tr')
      let td1 = document.createElement('td')
      td1.innerHTML = pessoa.nome

      let td2 = document.createElement('td')
      td2.innerHTML = pessoa.idade

      let td3 = document.createElement('td')
      td3.innerHTML = pessoa.salario

      tr.appendChild(td1)
      tr.appendChild(td2)
      tr.appendChild(td3)
      table.appendChild(tr)
    }

    const resultado = document.querySelector('.resultado')
    resultado.appendChild(table)
  }