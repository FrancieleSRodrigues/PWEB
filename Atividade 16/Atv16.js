function verificarCurso() {
    var selecao = document.getElementById("cursos");
    var opcaoTexto = selecao.options[selecao.selectedIndex].text;
    var opcaoValor = selecao.options[selecao.selectedIndex].value;
    var confirmacao = confirm(`Deseja realmente saber informações sobre o curso: ${opcaoTexto} ?`);
        if (confirmacao) {
            abreJanela();
        } else {
            alert("Você cancelou a operação.");
        }

    function abreJanela(){
        switch (opcaoValor) {
            case "ADS":
                novaJanela = window.open("https://www.fatecsorocaba.edu.br/curso_ads.asp", "ADS", "width = 600, height = 300");
                break;
            case "EA":
                novaJanela = window.open("https://www.fatecsorocaba.edu.br/curso_ea.asp", "EA", "width = 600, height = 300");
                break;
            case "FM":
                novaJanela = window.open("https://www.fatecsorocaba.edu.br/curso_fm.asp", "FM", "width = 600, height = 300");
                break;
            case "GE":
                novaJanela = window.open("https://www.fatecsorocaba.edu.br/curso_ead-ge.asp", "GE", "width = 600, height = 300");
                break;
            case "GQ":
                novaJanela = window.open("https://www.fatecsorocaba.edu.br/curso_gq.asp", "GQ", "width = 600, height = 300");
                break;
            case "LOG":
                novaJanela = window.open("https://www.fatecsorocaba.edu.br/curso_log.asp", "LOG", "width = 600, height = 300");
                break;
            case "MA":
                novaJanela = window.open("https://www.fatecsorocaba.edu.br/curso_ma.asp", "MA", "width = 600, height = 300");
                break;
            case "PM":
                novaJanela = window.open("https://www.fatecsorocaba.edu.br/curso_pm.asp", "PM", "width = 600, height = 300");
                break;
            case "POLI":
                novaJanela = window.open("https://www.fatecsorocaba.edu.br/curso_pol.asp", "POLI", "width = 600, height = 300");
                break;
            case "PMEC":
                novaJanela = window.open("https://www.fatecsorocaba.edu.br/curso_proj.asp", "PMEC", "width = 600, height = 300");
                break;
            case "SBIO":
                novaJanela = window.open("https://www.fatecsorocaba.edu.br/curso_sb.asp", "SBIO", "width = 600, height = 300");
                break;
            default:
                break;
        }
    }
}