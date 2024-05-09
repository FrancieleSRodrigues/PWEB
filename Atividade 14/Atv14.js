document.getElementById('maiuscula').addEventListener('change', function(){
    var texto = document.getElementById("texto").value;
    if(this.checked){
        document.getElementById("texto").value = texto.toUpperCase();
        document.getElementById('minuscula').checked = false;
    }
});

document.getElementById('minuscula').addEventListener('change', function(){
    var texto = document.getElementById("texto").value;
    if(this.checked){
        document.getElementById("texto").value = texto.toLowerCase();
        document.getElementById('maiuscula').checked = false;
    }
});