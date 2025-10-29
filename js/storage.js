// Função para obter dados do localStorage
const getData = (key) => {
    const data = localStorage.getItem(key);
    // Se houver dados, converte de JSON para objeto/array. Se não, retorna um array vazio.
    return data ? JSON.parse(data) : [];
};

// Função para salvar dados no localStorage
const saveData = (key, data) => {
    // Converte os dados (objeto/array) para uma string JSON antes de salvar.
    localStorage.setItem(key, JSON.stringify(data));
};