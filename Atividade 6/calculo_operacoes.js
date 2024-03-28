let numero1 = parseFloat(prompt("Insira o número 1:"));
let numero2 = parseFloat(prompt("Insira o número 2:"));

alert(`Soma: ${(numero1 + numero2)}`);
alert(`Subtração do primeiro pelo segundo: ${(numero1 - numero2)}`);
alert(`Multiplicação: ${(numero1 * numero2).toFixed(2)}`);
alert(`Divisão do primeiro pelo segundo: ${(numero1 / numero2).toFixed(2)}`);
alert(`Resto da divisão: ${(numero1 % numero2)}`);