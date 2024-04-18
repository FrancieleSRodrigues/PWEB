//Atividade 09 - Calculo de IMC

function calculo_IMC(a, p){
    var IMC = p/(Math.pow(a,2));
    return IMC.toFixed(1);
}

function verifica_IMC(IMC){
    switch(true){
        case IMC < 18.5:
            return("Magreza");
            break;
        case IMC >= 18.5 && IMC <= 24.9:
            return("Normal");
            break;
        case IMC >=25.0  && IMC <= 29.9:
            return("Sobrepeso");
            break;
        case IMC >= 30.0 && IMC <= 39.9:
            return("Obesidade");
            break;
        case IMC >= 40.0:
            return("Obesidade Grave");
            break;
        default:
            return("ERROR");
    }
}

function resultado(){
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
    document.getElementById("calculo_IMC").value = calculo_IMC(altura, peso);
    document.getElementById("classificacao").value = verifica_IMC(calculo_IMC(altura, peso));
}