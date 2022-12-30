const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let numero of numeros) {
  if ((numero % 2) === 1) {
    continue
  }

  console.log(numero);
}

let carros = ["BMW", "Volvo", "Saab", "Ford"];

list: {
    console.log(carros[0]);
    console.log(carros[1]);
    break list;
    console.log(carros[2]);
    console.log(carros[3]);
}