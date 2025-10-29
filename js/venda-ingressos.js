// Roda quando o conteúdo da página é totalmente carregado
document.addEventListener('DOMContentLoaded', () => {
    const sessaoSelect = document.getElementById('sessao');

    // Carrega todos os dados
    const sessoes = getData('sessoes');
    const filmes = getData('filmes');
    const salas = getData('salas');

    // Preenche o select com as sessões
    sessoes.forEach(sessao => {
        const filme = filmes.find(f => f.id === sessao.filmeId);
        const sala = salas.find(s => s.id === sessao.salaId);

        if (filme && sala) {
            const dataHora = new Date(sessao.dataHora);
            const dataFormatada = dataHora.toLocaleDateString('pt-BR');
            const horaFormatada = dataHora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

            const option = document.createElement('option');
            option.value = sessao.id;
            option.textContent = `${filme.titulo} - ${sala.nome} - ${dataFormatada} ${horaFormatada}`;
            sessaoSelect.appendChild(option);
        }
    });

    // --- A MÁGICA DE CONECTAR AS PÁGINAS ---
    // Verifica se um sessaoId foi passado na URL
    const urlParams = new URLSearchParams(window.location.search);
    const sessaoIdFromUrl = urlParams.get('sessaoId');

    // Se houver um ID, seleciona a sessão correspondente
    if (sessaoIdFromUrl) {
        sessaoSelect.value = sessaoIdFromUrl;
    }
});

document.getElementById('form-venda').addEventListener('submit', (event) => {
    event.preventDefault();

    // --- INÍCIO DA VALIDAÇÃO DO CPF ---
    const cpfInput = document.getElementById('cpf');
    const cpf = cpfInput.value;
    
    // 1. Limpa o CPF, removendo pontos, traços e espaços.
    const cpfLimpo = cpf.replace(/\D/g, '');

    // 2. Verifica se o CPF limpo tem 11 dígitos.
    if (cpfLimpo.length !== 11) {
        alert('CPF inválido! Por favor, insira um CPF com 11 dígitos.');
        cpfInput.focus(); // Coloca o cursor de volta no campo de CPF
        return; // 3. Para a execução aqui e não salva o ingresso.
    }
    // --- FIM DA VALIDAÇÃO DO CPF ---

    // Se o CPF for válido, o código continua normalmente...
    const sessaoId = document.getElementById('sessao').value;
    const nomeCliente = document.getElementById('cliente').value;
    const assento = document.getElementById('assento').value;
    const tipoPagamento = document.getElementById('pagamento').value;

    const novoIngresso = {
        id: Date.now(),
        sessaoId: parseInt(sessaoId),
        nomeCliente,
        cpf: cpfLimpo, // Salva o CPF já limpo, sem pontos ou traços
        assento,
        tipoPagamento
    };

    const ingressos = getData('ingressos');
    ingressos.push(novoIngresso);
    saveData('ingressos', ingressos);

    alert('Ingresso vendido com sucesso!');
    event.target.reset();

    window.location.href = 'sessoes.html';
});