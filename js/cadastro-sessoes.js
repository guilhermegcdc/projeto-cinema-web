// Roda quando o conteúdo da página é totalmente carregado
document.addEventListener('DOMContentLoaded', () => {
    // Carrega os filmes no select de filmes
    const filmeSelect = document.getElementById('filme');
    const filmes = getData('filmes');
    filmes.forEach(filme => {
        const option = document.createElement('option');
        option.value = filme.id; // Armazena o ID do filme
        option.textContent = filme.titulo; // Mostra o título do filme
        filmeSelect.appendChild(option);
    });

    // Carrega as salas no select de salas
    const salaSelect = document.getElementById('sala');
    const salas = getData('salas');
    salas.forEach(sala => {
        const option = document.createElement('option');
        option.value = sala.id; // Armazena o ID da sala
        option.textContent = `${sala.nome} (${sala.tipo})`; // Mostra o nome e tipo da sala
        salaSelect.appendChild(option);
    });
});

// Roda quando o formulário é enviado
document.getElementById('form-sessao').addEventListener('submit', (event) => {
    event.preventDefault();

    // Coleta os dados do formulário
    const filmeId = document.getElementById('filme').value;
    const salaId = document.getElementById('sala').value;
    const dataHora = document.getElementById('data-hora').value;
    const preco = parseFloat(document.getElementById('preco').value);
    const idioma = document.getElementById('idioma').value;
    const formato = document.getElementById('formato').value;

    // Cria um objeto para a nova sessão
    const novaSessao = {
        id: Date.now(),
        filmeId: parseInt(filmeId),
        salaId: parseInt(salaId),
        dataHora,
        preco,
        idioma,
        formato
    };

    // Salva a nova sessão no localStorage
    const sessoes = getData('sessoes');
    sessoes.push(novaSessao);
    saveData('sessoes', sessoes);

    alert('Sessão salva com sucesso!');
    event.target.reset();
});