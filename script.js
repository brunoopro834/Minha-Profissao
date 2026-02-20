// Adicione dentro da função abrirModal(tipo)
if(tipo === 'ri') {
    body.innerHTML = `
        <h2 style="font-family:'Cinzel', serif; color:#c5a059;">O Ciclo do Registro Imobiliário</h2>
        <ol style="line-height: 2; padding: 20px;">
            <li><strong>Protocolo:</strong> O título entra no cartório e ganha prioridade (Prenotação).</li>
            <li><strong>Qualificação:</strong> O Oficial analisa se o documento cumpre a Lei 6.015/73.</li>
            <li><strong>Exigências:</strong> Caso haja erros, o oficial emite uma "Nota de Devolução".</li>
            <li><strong>Registro:</strong> Se tudo estiver correto, o ato é praticado na matrícula em até 10 dias (em média).</li>
        </ol>
        <p><small>O Registro de Imóveis é a serventia de maior responsabilidade civil do Oficial.</small></p>
    `;
}