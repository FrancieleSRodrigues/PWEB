let nomeAluno = prompt("Insira o nome do aluno:");
let nota1 = parseFloat(prompt("1ª nota:"));
let nota2 = parseFloat(prompt("2ª nota:"));
let nota3 = parseFloat(prompt("3ª nota"));

alert(`A média aritmética do(a) ${nomeAluno} é: ${((nota1 + nota2 + nota3) / 3).toFixed(2)}`);