// Métodos de instância e estáticos

class ControleRemoto {
  constructor(tv) {
    this.tv = tv
    this.volume = 0
  }

  // Métodos de instância
  aumentarVolume() {
    this.volume += 2
  }

  // Métodos de instância
  diminuirVolume() {
    this.volume -= 2
  }
  
  // Métodos estático
  static trocaPilha() {
    console.log('ok! vou trocar as pilhas');
  }
}

let controle1 = new ControleRemoto('lg')
controle1.aumentarVolume()
console.log(controle1); 
controle1.aumentarVolume()
console.log(controle1);
ControleRemoto.trocaPilha()
console.log(controle1); 
controle1.diminuirVolume()
console.log(controle1);