/*
 705.484.450-52

 7  0  5  4  8  4  4  5  0
 X  X  X  X  X  X  X  X  X
 10 9  8  7  6  5  4  3  2 = 237

 11 - (237 % 11) = 5 (Primeiro digito)
 se o digito for maior que 9 se considera 0
 
 7  0  5  4  8  4  4  5  0  5
 X  X  X  X  X  X  X  X  X  X
 11 10 9  8  7  6  5  4  3  2 = 284

 11 - (284 % 11) = 2 (Segundo digito)
 se o digito for maior que 9 se considera 0
*/
let cpf = '341.913.018.02'

function cpfToArray(cpfString) {
  return Array.from(cpfString.replace(/\D+/g, ''))
}

function multiplyCpf(cpfArray, numsToJump) {
  return cpfArray.reduce((accumulator, value, index, arr) => accumulator += index + 2 > arr.length ? 0 : Number(arr.slice( - (index + (numsToJump + 1)), - (index + numsToJump))) * (index + 2)
   ,0)
}

function splitCpf(multipliedCpf) {
  digit = 11 - (multipliedCpf % 11)
  return  digit > 9 ? 0 : digit
}

function isCpfValid(cpf) {
  let cpfArr = cpfToArray(cpf)
  if (cpfArr.length !== 11) { return false }
  let digit1calculed = splitCpf(multiplyCpf(cpfArr, 1))
  let digit2calculed = splitCpf(multiplyCpf(cpfArr, 2))

  let digit1expected = Number(cpfArr.splice(-1, 1))
  let digit2expected = Number(cpfArr.splice(-1, 1))

  return digit1calculed === digit1expected && digit2calculed === digit2expected
}

console.log(isCpfValid(cpf))