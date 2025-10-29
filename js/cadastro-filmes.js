document.getElementById('form-filme').addEventListener('submit', (event) => {
    // Impede que a página recarregue ao enviar o formulário
    event.preventDefault();

    // Coleta os dados de cada campo do formulário
    const titulo = document.getElementById('titulo').value;
    const posterUrl = document.getElementById('poster').value; // 1. Coleta a URL do poster
    const descricao = document.getElementById('descricao').value;
    const genero = document.getElementById('genero').value;
    const classificacao = document.getElementById('classificacao').value;
    const duracao = parseInt(document.getElementById('duracao').value);
    const estreia = document.getElementById('estreia').value;

    // Cria um objeto para representar o novo filme
    const novoFilme = {
        id: Date.now(),
        titulo: titulo,
        posterUrl: posterUrl, // 2. Adiciona o posterUrl ao objeto
        descricao: descricao,
        genero: genero,
        classificacao: classificacao,
        duracao: duracao,
        estreia: estreia
    };

    // Pega a lista de filmes que já está salva no localStorage
    const filmes = getData('filmes');

    // Adiciona o novo filme à lista
    filmes.push(novoFilme);

    // Salva a lista de filmes de volta no localStorage
    saveData('filmes', filmes);

    // Exibe um alerta para o usuário
    alert('Filme salvo com sucesso!');
    
    // Limpa todos os campos do formulário
    event.target.reset();
});