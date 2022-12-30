function calculoImc() {
  const form = document.querySelector('.form');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const inputPeso = e.target.querySelector('.peso');
    const inputAltura = e.target.querySelector('.altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
      setResult('Peso inválido', false);
      return;
    }

    if (!altura) {
      setResult('altura inválida', false);
      return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `seu IMC é ${imc} (${nivelImc})`;

    setResult(msg, true);
  });

  function getNivelImc(imc) {
    const nivel = ['abaixo do peso', 'peso normal', 'sobrepeso', 'obesidade grau I', 'obesidade grau II', 'obesidade grau III'];
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
  }

  function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
  }

  function criaP() {
    const p = document.createElement('p');
    return p;
  }

  function setResult(msg, isValid) {
    const result = document.querySelector('.result')
    result.innerHTML = '';

    const p = criaP();

    if (isValid) {
      p.classList.add('acerto');
    } else {
      p.classList.add('erro');
    }

    p.innerHTML = msg;
    result.appendChild(p);
  }

}
