document.getElementById('form-sala').addEventListener('submit', (event) => {
    event.preventDefault();

    // Coleta os dados do formulário
    const nome = document.getElementById('nome').value;
    const capacidade = parseInt(document.getElementById('capacidade').value);
    const tipo = document.getElementById('tipo').value;

    // Cria um objeto para a nova sala
    const novaSala = {
        id: Date.now(),
        nome,
        capacidade,
        tipo
    };

    // Obtém as salas já existentes do localStorage
    const salas = getData('salas');

    // Adiciona a nova sala à lista
    salas.push(novaSala);

    // Salva a lista atualizada de volta no localStorage
    saveData('salas', salas);

    alert('Sala salva com sucesso!');
    event.target.reset();
});