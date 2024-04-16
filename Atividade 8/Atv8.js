//Atividade 8 - Pesquisa

//Funcoes:
//1. A média da idade das pessoas que responderam ao questionário:
function media_idade(arr){
    var soma = 0;

    for (var i=0; i<arr.length; i++){
        soma += (parseInt(arr[i]));
    }

    return (parseInt(soma/idades.length));
    
}

//2. A idade da pessoa mais velha:
function maior_idade(arr){

    arr.sort((a,b) => b-a);
    var maior_idade = arr[0];
    return maior_idade;

}

//3. A idade da pessoa mais nova:
function menor_idade(arr){

    arr.sort((a,b) => a-b);
    var menor_idade = arr[0];
    return menor_idade;

}

//4. A quantidade de pessoas que responderam péssimo:
function qtde_pessimo(arr){
    var qtde_pessimo = 0;

    for(var i=0; i<arr.length; i++){
        if(arr[i] == 1){
            qtde_pessimo += 1;
        }
    }

    return qtde_pessimo;
}
//5. A porcentagem de pessoas que responderam ótimo e bom:

    function qtde_otimo_bom(arr){
        var qtde_otimo_bom = 0;
        var porcent_otimo_bom = 0;

        for(var i=0; i<arr.length; i++){
            if(arr[i] == 4 || arr[i] == 3){
                qtde_otimo_bom += 1;
            }
        }

        porcent_otimo_bom = ((qtde_otimo_bom * 100)/arr.length);

        return (parseInt(porcent_otimo_bom) + "%");
    }

//6. O número de mulheres e homens que responderam ao questionário:

    function qtde_mulheres(arr){
        var qtde_mulheres = 0;

        for(var i=0; i<arr.length; i++){
            if(arr[i] == 'F'){
                qtde_mulheres += 1;
            }
        }

        return (qtde_mulheres);
    }

    function qtde_homens(arr){
        var qtde_homens = 0;

        for(var i=0; i<arr.length; i++){
            if(arr[i] == 'M'){
                qtde_homens += 1;
            }
        }
        
        return (qtde_homens);
    }

//Validacoes
    function valida_sexo(sexo){
        if(sexo != 'F' && sexo != 'M'){
            alert("Opção invalida.");
            return false;
        }
        return true;
    }

    function valida_nota(nota){
        if(nota>4 || nota<1){
            alert("Opção invalida.");
            return false;
        }
        return true;
    }

var idades = [];
var sexo = [];
var opiniao = [];
var cont = 0;

function pesquisa(){

    if(valida_sexo(document.getElementById("sexo").value.toUpperCase()) && valida_nota(document.getElementById("nota").value)){
        idades.push(document.getElementById("idade").value);
        sexo.push(document.getElementById("sexo").value.toUpperCase());
        opiniao.push(document.getElementById("nota").value);
        cont += 1;
    }

    document.getElementById("idade").value="";
    document.getElementById("sexo").value="";
    document.getElementById("nota").value="";

    document.getElementById("contador").value = cont;
}

function finalizar(){
    document.getElementById("media_idade").value = media_idade(idades);
    document.getElementById("maior_idade").value = maior_idade(idades);
    document.getElementById("menor_idade").value = menor_idade(idades);
    document.getElementById("qtde_pessimo").value = qtde_pessimo(opiniao);
    document.getElementById("porcent_otimo_bom").value = qtde_otimo_bom(opiniao);
    document.getElementById("qtde_mulheres").value = qtde_mulheres(sexo);
    document.getElementById("qtde_homens").value = qtde_homens(sexo);
}