// Roda quando o conteúdo da página é totalmente carregado
document.addEventListener('DOMContentLoaded', () => {
    const listaSessoesContainer = document.getElementById('lista-sessoes');

    // Busca todos os dados necessários do localStorage
    const sessoes = getData('sessoes');
    const filmes = getData('filmes');
    const salas = getData('salas');

    // Verifica se há sessões para exibir
    if (sessoes.length === 0) {
        listaSessoesContainer.innerHTML = '<p class="text-center">Nenhuma sessão disponível no momento.</p>';
        return;
    }

    // Limpa o contêiner antes de adicionar os novos cards
    listaSessoesContainer.innerHTML = '';

    // Itera sobre cada sessão para criar um card
    sessoes.forEach(sessao => {
        // Encontra o filme e a sala correspondentes usando os IDs
        const filme = filmes.find(f => f.id === sessao.filmeId);
        const sala = salas.find(s => s.id === sessao.salaId);

        // Se não encontrar o filme ou a sala (dados inconsistentes), pula esta sessão
        if (!filme || !sala) {
            return;
        }

        // Formata a data e hora para um formato mais legível
        const dataHora = new Date(sessao.dataHora);
        const dataFormatada = dataHora.toLocaleDateString('pt-BR');
        const horaFormatada = dataHora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

        // Cria o HTML do card para a sessão usando as classes do Bootstrap
const cardSessao = `
    <div class="col-md-6 col-lg-4 mb-4">
        <div class="card h-100">
            <img src="${filme.posterUrl}" class="card-img-top card-img-poster" alt="Pôster do filme ${filme.titulo}">
            <div class="card-body">
                <h5 class="card-title">${filme.titulo}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${filme.genero} | ${filme.classificacao}</h6>
                <p class="card-text">
                    <strong>Sala:</strong> ${sala.nome} (${sala.tipo})<br>
                    <strong>Data:</strong> ${dataFormatada}<br>
                    <strong>Horário:</strong> ${horaFormatada}<br>
                    <strong>Preço:</strong> R$ ${sessao.preco.toFixed(2)}
                </p>
                <a href="venda-ingressos.html?sessaoId=${sessao.id}" class="btn btn-primary">Comprar Ingresso</a>
            </div>
        </div>
    </div>
`;

        // Adiciona o card gerado ao contêiner na página
        listaSessoesContainer.innerHTML += cardSessao;
    });
});