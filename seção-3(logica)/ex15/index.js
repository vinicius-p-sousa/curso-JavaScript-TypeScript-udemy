const soma = (x, y) => {
  if (
    typeof x !== 'number' ||
    typeof y !== 'number'
  ) {
    throw new Error('X e Y precisam ser numeros')
  }

  return x + y
}

try {
  console.log(soma(1, 4));
  console.log(soma('1', 4));
} catch(err) {
  console.log(err)
}