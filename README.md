# Pizzaria RESTful, a melhor pizza digital!

![alt text](/images/logo.png)

Esse é um projeto que eu desenvolvi enquanto estudava como Trainee na Fábrica de Tecnologias Turing para me familiarizar com APIs REST no NodeJS.

O sistema trata basicamente de utilizar a tecnologia de Banco de Dados em conjunto com o servidor fazendo requisições HTTP para manipular uma lista de clientes de uma pizzaria fictícia.

## Instalação

Clone o repositório, abra o console e digite npm install para instalar as dependências do repositório.

Além disso, é necessario ter um MySQL Server rodando na sua máquina na porta 3306, com uma database chamada 'pizzaria'.

É importante que você crie um arquivo ".env" na pasta vars e escreva no seguinte modelo:

```
PORT="Porta a ser utilizada pelo Express"
HOST_DB="é o IP do seu Mysql Server (localhost)"
DB_USER="usuário do seu server, root padrão"
DB_PASSWORD="senha do seu server"
```

Por padrão, a porta usada pelo Express é a 3000, porém você pode modificar

Após isso, dê um "npm start" no console.

# Rotas

### GET /clients

Essa rota retorna um JSON com todos os clientes.

### GET /clientes/:id

Essa rota retorna um JSON com todos os clientes

### POST /clients

Através dessa rota, você pode enviar um body contendo os parâmetros "nome", "telefone", "senha" para cadastrar um novo cliente.

```
body { "nome": "Dev Developer",
       "telefone": "40028922",
       "senha": "dev123" }
```

### PUT /clients

Através dessa rota, você pode enviar um body contendo o parâmetro "id" e qualquer outro parâmetro que queira atualizar. Por exemplo, se eu for atualizar o nome do cliente cujo id seja 1, farei da seguinte forma:

```
body { "id": "1",
       "nome": Dev Developer }
```

### DELETE /clients

Através dessa rota, você pode enviar um body contendo o parâmetro "id" para excluir um cliente do banco de dados que possua determinado ID. Exemplo:

```
body { "id": "1" }
```
