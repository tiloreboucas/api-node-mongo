## API Node.js com MongoDB

Este projeto é uma API simples em Node.js que utiliza MongoDB como banco de dados para gerenciar informações sobre filmes.

### Funcionalidades

A API oferece as seguintes funcionalidades:

- **Criar um novo filme:** Permite adicionar novos filmes ao banco de dados, incluindo título, descrição, URL da imagem e URL do trailer.
- **Obter um filme pelo ID:** Retorna as informações de um filme específico com base no seu ID.
- **Listar todos os filmes:** Retorna uma lista com todos os filmes cadastrados no banco de dados.

### Documentação da API

A API é documentada usando Swagger. Você pode acessar a documentação interativa em `/api-docs` após iniciar o servidor. A documentação detalha cada endpoint, os parâmetros necessários e os tipos de resposta.

### Arquivos Principais

- **`index.js`**: Contém o código principal da aplicação, definindo as rotas da API, conectando ao banco de dados MongoDB e configurando o Swagger.
- **`package.json`**: Define as dependências do projeto, incluindo Express para o servidor web, Mongoose para interagir com o MongoDB, e Swagger para a documentação da API.

### Como executar a aplicação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/api-node-mongo.git
   ```

2. **Instale as dependências:**

    ```bash
    cd api-node-mongo
    npm install
    ```

3. **Configure as variáveis de ambiente:**

    - Crie um arquivo .env na raiz do projeto.
    - Defina a variável MONGODB_URL com a URL de conexão do seu banco de dados MongoDB.

4. **Inicie o servidor:**

    ```bash
    npm start
    ```

A API estará disponível em <http://localhost:3001>.

### Próximos Passos

- Implementar autenticação e autorização para proteger a API.
- Adicionar validação de dados para garantir a integridade das informações.
- Criar testes automatizados para garantir a qualidade do código.
