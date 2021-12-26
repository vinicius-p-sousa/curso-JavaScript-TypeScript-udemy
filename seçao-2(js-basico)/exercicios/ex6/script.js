function meuEscopo() {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');
  let contador = 0;

  const pessoas = [];
  
  function criaObjeto(nome, sobrenome, peso, altura) {
    const objeto = {
      nome,
      sobrenome,
      peso,
      altura
    }

    return objeto
  }

  function recebeEventoForm(evento) {
    evento.preventDefault()

    const nome = form.querySelector('.nome')
    const sobrenome = form.querySelector('.sobrenome')
    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')
    contador++ 

    pessoas.push(criaObjeto(nome, sobrenome, peso, altura))
    console.log(pessoas);

    resultado.innerHTML += `<h1>pessoa: ${contador}</h1>`
    resultado.innerHTML += `<p>nome: ${nome.value} <br></p>`
    resultado.innerHTML += `<p>sobrenome: ${sobrenome.value} <br></p>`
    resultado.innerHTML += `<p>peso: ${peso.value} <br></p>`
    resultado.innerHTML += `<p>altura: ${altura.value} <br></p>`
  }

  form.addEventListener('submit', recebeEventoForm)
}

meuEscopo();