function validar(){
    if (document.forms.formulario1.elements[0].value == "" || document.forms.formulario1.elements[0].value.length < 10) {
        alert("Preencha campo NOME corretamente! Nome deve ter no mínimo 10 caracteres.");
        document.forms.formulario1.elements[0].focus();
        return false;
    }

    if (document.forms.formulario1.elements[1].value == "" || document.forms.formulario1.elements[1].value.indexOf('@') == -1 || document.forms.formulario1.elements[1].value.indexOf('.') == -1) {
        alert("Preencha campo E-MAIL corretamente!");
        document.forms.formulario1.elements[1].focus();
       return false;
    }

    if (document.forms.formulario1.elements[2].value == "" || document.forms.formulario1.elements[2].value.length < 20) {
        alert("É necessario preencher o campo COMENTARIO com mais de 20 caracteres!");
        document.forms.formulario1.elements[2].focus();
        return false;
    }


    if (document.forms.formulario1.elements[3].checked){
        alert("Volte sempre à esta página!");
    }else if(document.forms.formulario1.elements[4].checked){
        alert("Que bom que você voltou a visitar nossa página!");
    }else{
        alert("Pesquisa não respondida");
        document.forms.formulario1.elements[3].focus();
        return false;
    }
    return true;
}

function limpar(){
    return true;
}

function verificaRadio(n){
    document.forms.formulario1.elements[n+1].checked = false;
}