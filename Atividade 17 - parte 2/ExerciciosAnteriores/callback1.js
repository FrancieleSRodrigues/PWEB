const prompt = require('prompt-sync')();
//não esquecer de instalar
//npm install prompt-sync

function saudacao(nome){
    console.log('Oi, ' + nome + '!');
}

function entradaNome(callback){
    var nome = prompt('Digite seu nome: ');
    callback(nome); //chamando a função callback (saudacao)
}

entradaNome(saudacao);