function showAlert(tipo) {
    if (tipo === 'simular') {
        let nota = prompt("Digite sua nota média no ENEM:");
        if (nota >= 735) {
            alert("Parabéns! Com " + nota + ", você tem grandes chances de ingressar em Direito em diversas universidades públicas.");
        } else {
            alert("Com " + nota + ", você pode tentar bolsas pelo ProUni ou buscar faculdades com notas de corte alternativas.");
        }
    } else if (tipo === 'editais') {
        alert("Redirecionando para a lista de concursos de cartórios... (Simulação)");
    }
}