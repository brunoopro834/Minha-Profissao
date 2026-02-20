function abrirModal(tipo) {
    const modal = document.getElementById('modal');
    const body = document.getElementById('modal-body');
    modal.style.display = "block";

    if (tipo === 'concurso') {
        body.innerHTML = `
            <h2>Simulador de Aprovação</h2>
            <p>Para ser Oficial, você precisa de Direito + Concurso.</p>
            <input type="number" id="nota" placeholder="Sua nota simulada (0-100)">
            <button class="btn-gold" onclick="alert('Com esta nota, você estaria entre os 5% melhores!')">Calcular Chance</button>
        `;
    } else if (tipo === 'ri-detalhes') {
        body.innerHTML = `
            <h2>O Ciclo do Registro de Imóveis</h2>
            <ul>
                <li><strong>Protocolo:</strong> Entrada do título.</li>
                <li><strong>Qualificação:</strong> Análise jurídica do Oficial.</li>
                <li><strong>Registro:</strong> Propriedade transmitida!</li>
            </ul>
        `;
    }
}

function fecharModal() {
    document.getElementById('modal').style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) fecharModal();
}