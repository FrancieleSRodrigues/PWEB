// Exercicio 1:
alert("Exercício 1: \nCrie uma função para receber três números e retornar o maior deles: ");
var num1 = prompt("Insira o 1° número: ");
var num2 = prompt("Insira o 2° número: ");
var num3 = prompt("Insira o 3° número: ");
function maior_numero(a,b,c) {
    return Math.max(a, b, c);
    }
    alert(maior_numero(num1,num2,num3));

//Exercicio 2:
alert("Exercício 2: \nCrie uma função para receber três números e retorná-los em ordem crescente: ");
var num1 = prompt("Insira o 1° número: ");
var num2 = prompt("Insira o 2° número: ");
var num3 = prompt("Insira o 3° número: ");
numeros = [num1, num2, num3];
numeros.sort(function(a,b){return a-b});
alert(numeros);

//Exercicio 3:
alert("Exercício 3: \nCrie uma função para receber uma string e retornar se ela é palíndromo ou não:");
var frase = prompt("Insira sua string: ");

function palindrando(texto){
    var frase_adap;
    var frase_convert;
    frase_adap = texto.toUpperCase().trim();
    frase_convert = frase_adap.split('').reverse().join('');
    if(frase_adap == frase_convert){
        return("É palíndromo");
    }else{
        return("Não é palíndromo");
    }
}alert(palindrando(frase));

//Exercicio 4:
alert("Exercício 4: \nCrie uma função para receber três valores, informar se formam um triangulo e qual é o tipo do triângulo:");
var num1 = parseInt(prompt("Insira o 1° número: "));
var num2 = parseInt(prompt("Insira o 2° número: "));
var num3 = parseInt(prompt("Insira o 3° número: "));

function verifica_triangulo(a,b,c){
    if(Math.abs(a-b) < c && c <a+b){
        if(Math.abs(a-c)<b && b<a+c){
            if(Math.abs(b-c)<a && a<b+c){
                if(c == b && b == c){
                    return("É um triangulo Equilatero!");
                }
                else if(a == b || a == c || b == c){
                    return("É um triangulo Isósceles!");
                }
                else{
                    return("É um triângulo Escaleno!");
                }
            }
        }
    }
    else{
        return("Não é triangulo");
    }
}alert(verifica_triangulo(num1, num2, num3));


