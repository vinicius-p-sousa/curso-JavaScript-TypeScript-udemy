import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada'),
  quantidadeCaractere = document.querySelector('#num-caracteres'),
  addMaiusculas = document.querySelector('#chk-maiusculas'),
  addMinusculas = document.querySelector('#chk-minusculas'),
  addNumeros = document.querySelector('#chk-numeros'),
  addSimbolos = document.querySelector('#chk-simbolos'),
  gerarSenha = document.querySelector('.gerar-senha')

export default () => {
  gerarSenha.addEventListener('click', () => {
    senhaGerada.innerHTML = gera()
  })
}

function gera() {
  const senha = geraSenha(
    quantidadeCaractere.value,
    addMaiusculas.checked,
    addMinusculas.checked,
    addNumeros.checked,
    addSimbolos.checked
  )

  return senha || 'Nenhum item foi selecionado'
}