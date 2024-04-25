//Atividade 12

//Exercicio 1:
var base = prompt("Insira o valor da base (m)");
var altura = prompt("Insira o valor da altura (m)");

function Retangulo(b, a) {
    this.b = b; //this é a propriedade
    this.a = a;
    this.Calcula_area = function () {
        return b * a;
    }
}
var Retangulo1 = new Retangulo(base, altura);
alert("Base: " + Retangulo1.b + "m");
alert("Altura: " + Retangulo1.a + "m");
alert("Área: " + Retangulo1.Calcula_area() + "m2");

//Exercicio 2:
class Conta {
    constructor() {
        this.nome;
        this.banco;
        this.numero_conta;
        this.saldo;
    }
    setNome(value) {
        this.nome = value;
    }
    getNome() {
        return this.nome;
    }
    setBanco(value) {
        this.banco = value;
    }
    getBanco() {
        return this.banco;
    }
    setNum_conta(value) {
        this.numero_conta = value;
    }
    getNum_conta() {
        return this.numero_conta;
    }
    setSaldo(value) {
        this.saldo = value;
    }
    getSaldo() {
        return this.saldo;
    }
}//classe fechou aqui, agora cria-se o objeto:



class Corrente extends Conta {
    constructor() {
        super();
        this.saldoEspecial;
    }
    setSaldoEspecial(value) {
        this.saldoEspecial = value;
    }
    getsaldoEspecial() {
        return this.saldoEspecial;
    }
}
class Poupanca extends Conta {
    constructor() {
        super();
        this.juros;
        this.dataVencimento;
    }
    setJuros(value) {
        this.juros = value;
    }
    getJuros() {
        return this.juros;
    }
    setDataVencimento(value) {
        this.dataVencimento = value;
    }
    getDataVencimento() {
        return this.dataVencimento;
    }
}


var nome = prompt("Insira o seu nome: ");
var banco = prompt("Insira qual o seu banco: ");
var num_conta = prompt("Insira o número da sua conta: ");
var saldo = prompt("Insira o seu saldo: ");
var saldoEspecial = prompt("Insira o seu saldo especial: ");


//Criando obj Conta Corrente
var objContaCorrente = new Corrente();
objContaCorrente.setNome(nome);
objContaCorrente.setBanco(banco);
objContaCorrente.setNum_conta(num_conta);
objContaCorrente.setSaldo(saldo);
objContaCorrente.setSaldoEspecial(saldoEspecial);

alert(`Conta Corrente
    \nNome: ${objContaCorrente.getNome()} 
    \nBanco: ${objContaCorrente.getBanco()}
    \nNumero da Conta: ${objContaCorrente.getNum_conta()}
    \nSaldo: ${objContaCorrente.getSaldo()}
    \nSaldo Especial: ${objContaCorrente.getsaldoEspecial()}`);

//Criando obj Conta Poupanca
var objContaPoupanca = new Poupanca();
objContaPoupanca.setNome(nome);
objContaPoupanca.setBanco(banco);
objContaPoupanca.setNum_conta(num_conta);
objContaPoupanca.setSaldo(saldo);
objContaPoupanca.setJuros("10%");
objContaPoupanca.setDataVencimento("30/04/2024");

alert(`Conta Poupança
    \nNome: ${objContaPoupanca.getNome()} 
    \nBanco: ${objContaPoupanca.getBanco()}
    \nNumero da Conta: ${objContaPoupanca.getNum_conta()}
    \nSaldo: ${objContaPoupanca.getSaldo()}
    \nJuros: ${objContaPoupanca.getJuros()}
    \nData de Vencimento: ${objContaPoupanca.getDataVencimento()}`);