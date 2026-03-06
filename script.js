// Função para enviar mensagem do formulário de contato
function enviarMensagem(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    const formMessage = document.getElementById('formMessage');
    
    // Validação simples
    if (!nome || !email || !mensagem) {
        mostrarMensagem('Por favor, preencha todos os campos obrigatórios.', 'error');
        return;
    }
    
    // Simulação de envio (em um projeto real, você enviaria para um backend)
    // Aqui você pode integrar com um serviço de email ou API
    console.log('Mensagem enviada:', { nome, email, mensagem });
    
    // Mostra mensagem de sucesso
    mostrarMensagem('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
    
    // Limpa o formulário
    document.getElementById('contactForm').reset();
}

function mostrarMensagem(texto, tipo) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = texto;
    formMessage.className = 'form-message ' + tipo;
    
    // Remove a mensagem após 5 segundos
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}