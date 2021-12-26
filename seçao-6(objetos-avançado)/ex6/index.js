// Polimorfismo

function Conta(agencia, conta, saldo) {
  this.agencia = agencia
  this.conta = conta
  this.saldo =  saldo
}

Conta.prototype.sacar = function (valor) {
  if (valor > this.saldo) {
    console.log('Saldo insuficiente');
    this.verSaldo()
    return 
  }
  this.saldo -= valor
  this.verSaldo()
}

Conta.prototype.depositar = function (valor) {
  this.saldo += valor
  this.verSaldo()
}

Conta.prototype.verSaldo = function () {
  console.log(`Agencia: ${this.agencia}, Saldo: ${this.saldo}`)
}

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo)
  this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.contructor = ContaCorrente

ContaCorrente.prototype.sacar = function (valor) {
  if (valor > (this.saldo + this.limite)) {
    console.log('Saldo insuficiente');
    this.verSaldo()
    return
  }

  this.saldo -= valor
  this.verSaldo()
}

ContaCorrente.prototype.verSaldo = function () {
  console.log(`Agencia: ${this.agencia}, Saldo: ${this.saldo}, Limite: ${this.limite}`)
}

function ContaPoupança(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo)
}
ContaPoupança.prototype = Object.create(Conta.prototype)
ContaPoupança.prototype.constructor = ContaPoupança

const contaCorente = new ContaCorrente('itau', 'corrente', 0, 100)
contaCorente.sacar(100)

console.log();

const contaPoupanca = new ContaPoupança('itau', 'poupanca', 100)
contaPoupanca.sacar(100)