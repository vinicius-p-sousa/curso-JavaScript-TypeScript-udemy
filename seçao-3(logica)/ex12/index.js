// escreve uma função que recebe 2 numeros e retorne o maior

// function retornaMaior(num1=0, num2=0) {
//   if (num1 > num2) {
//     return `o numero ${num1} é maior que o ${num2}`
//   } else {
//     return `o numero ${num2} é maior que o ${num1}`
//   }
// }

const retornaMaior = (num1=0, num2=0) => num1 > num2 ? num1 : num2

console.log(retornaMaior(2011, 2013)); 