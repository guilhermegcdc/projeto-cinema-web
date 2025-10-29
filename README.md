# 🎬 CineDev - Sistema de Controle de Cinema

[cite_start]Este é um sistema web para o controle de um cinema, desenvolvido como parte de um estudo de caso[cite: 1]. [cite_start]O projeto simula o cadastro de filmes, salas, sessões e a venda de ingressos[cite: 3].

[cite_start]O sistema foi construído inteiramente com **HTML5**, **CSS3 (Bootstrap)** e **JavaScript puro (Vanilla JS)**[cite: 3]. [cite_start]Todos os dados são armazenados localmente no navegador do usuário utilizando `localStorage`[cite: 4, 11].

## ✨ Funcionalidades

- [cite_start]**Navegação Multi-página**: O sistema é dividido em várias páginas HTML interligadas[cite: 4, 16].
- [cite_start]**Cadastro de Filmes**: Formulário para adicionar novos filmes (título, gênero, pôster, etc.)[cite: 24, 25, 26, 27, 28, 29, 30].
- [cite_start]**Cadastro de Salas**: Formulário para adicionar novas salas (nome, capacidade, tipo)[cite: 33, 34, 35, 37].
- [cite_start]**Cadastro de Sessões**: Formulário dinâmico que carrega os filmes e salas já cadastrados no `localStorage` para criar novas sessões[cite: 40, 41, 42].
- [cite_start]**Listagem de Sessões**: Uma página visual que exibe as sessões disponíveis, combinando dados de filmes, salas e sessões[cite: 58, 59, 60, 61].
- [cite_start]**Compra de Ingressos**: Formulário de venda que é pré-selecionado ao clicar em "Comprar" na lista de sessões[cite: 49, 50, 63].
- [cite_start]**Persistência de Dados**: Todos os registros (filmes, salas, sessões, ingressos) são salvos no `localStorage` do navegador[cite: 11, 32, 39, 48, 57].

## 🛠️ Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **Bootstrap 5** (para o layout e componentes)
- **JavaScript (ES6+)**
- **`localStorage`** (para simulação de banco de dados)

## ⚙️ Como Executar o Projeto

Este projeto **não requer Docker** ou um servidor web. Ele foi projetado para rodar diretamente no navegador.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/projeto-cinema-web.git](https://github.com/seu-usuario/projeto-cinema-web.git)
    ```
    *(Use o seu link do repositório aqui)*

2.  **Acesse a pasta do projeto:**
    ```bash
    cd projeto-cinema-web
    ```

3.  **Abra o arquivo principal:**
    Basta dar um clique duplo no arquivo `index.html` para abri-lo no seu navegador de preferência.

---
[cite_start]_Projeto desenvolvido para o Estudo de Caso do Sistema de Cinema[cite: 1]._
