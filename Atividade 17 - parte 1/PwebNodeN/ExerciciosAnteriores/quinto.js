var eventos = require('events'); //incluindo o modulo eventos

//Atribuição da classe EventEmitter a uma variavel
var EmissorEventos = eventos.EventEmitter;

//Criação de uma instância do EventEmitter variável
var ee = new EmissorEventos();

//ou criando direto sem a variável intermediária
//var ee = new eventos.EventEmitter();
//mas da forma anterior é uma boa prática

ee.on('dados', function(fecha){
    console.log(fecha);
});

//Emissão do evento a cada 500 milisegundos:
setInterval(function(){
    ee.emit('dados', Date.now());
}, 500);