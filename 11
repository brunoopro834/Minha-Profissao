// Função para abrir os modais e preencher com conteúdo dinâmico
function abrirModal(tipo) {
    const modal = document.getElementById('modal');
    const body = document.getElementById('modal-body');
    modal.style.display = "block";

    if(tipo === 'concurso') {
        body.innerHTML = `
            <h2 style="color:#0a1128">Simulador de Probabilidade</h2>
            <p>Com base nos últimos concursos de Cartório:</p>
            <label>Quantas horas você estuda por dia?</label><br>
            <input type="number" id="horas" style="width:100%; padding:10px; margin:10px 0;">
            <button onclick="processarSimulacao()" class="btn-gold">Calcular Chance</button>
            <div id="resultadoSim"></div>
        `;
    } else if(tipo === 'vagas') {
        body.innerHTML = `
            <h2>Editais Abertos 2026</h2>
            <ul style="list-style:none; padding:0;">
                <li style="padding:10px; border-bottom:1px solid #eee;">🟢 TJ-SP: 154 Serventias (Inscrições Abertas)</li>
                <li style="padding:10px; border-bottom:1px solid #eee;">🟢 TJ-MG: 89 Serventias (Aguardando Edital)</li>
                <li style="padding:10px; border-bottom:1px solid #eee;">🟡 TJ-RJ: Concurso em Andamento</li>
            </ul>
        `;
    }
}

function fecharModal() {
    document.getElementById('modal').style.display = "none";
}

function processarSimulacao() {
    const h = document.getElementById('horas').value;
    const res = document.getElementById('resultadoSim');
    if(h > 6) {
        res.innerHTML = "<h4 style='color:green; margin-top:20px;'>Probabilidade Alta! Você está no caminho da elite jurídica.</h4>";
    } else {
        res.innerHTML = "<h4 style='color:orange; margin-top:20px;'>Foco necessário. A concorrência para titular exige média de 8h/dia.</h4>";
    }
}

function calcularEmolumentos() {
    const valor = prompt("Digite o valor do imóvel para simular a escritura (R$):");
    if(valor) {
        const taxa = (valor * 0.005).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        alert(`O valor estimado de emolumentos para este ato é de aproximadamente ${taxa}. (Nota: Varia por estado)`);
    }
}

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) fecharModal();
}