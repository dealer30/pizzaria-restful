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
DB_PASSWORD="password do seu server"
```

Por padrão, a porta usada pelo Express é a 3000, porém você pode modificar

Após isso, dê um "npm start" no console.

# Rotas

[![Run in Postman!](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/938cdba9b45d6c482101?action=collection%2Fimport)

## Clientes

Rotas para manipulação de clientes.

***

### GET /clients

Essa rota retorna um JSON com todos os clientes.

### GET /clientes/:id

Essa rota retorna um JSON com um cliente específico.

### POST /clients

Através dessa rota, você pode enviar um body contendo os parâmetros "name", "cellphone", "password" para cadastrar um novo cliente.

```
body { "name": "Dev Developer",
       "cellphone": "40028922",
       "password": "dev123" }
```

### PUT /clients

Através dessa rota, você pode enviar um body contendo o parâmetro "id" e qualquer outro parâmetro que queira atualizar. Por exemplo, se eu for atualizar o name do cliente cujo id seja 1, farei da seguinte forma:

```
body { "id": "1",
       "name": Dev Developer }
```

### DELETE /clients

Através dessa rota, você pode enviar um body contendo o parâmetro "id" para excluir um cliente do banco de dados que possua determinado ID. Exemplo:

```
body { "id": "1" }
```

***

## Pedidos

Rotas para manipulação de pedidos.

***

### GET /orders

Essa rota retorna um JSON com todos os pedidos.

### GET /orders/:id

Essa rota retorna um JSON com um pedido específico.

### POST /orders

Através dessa rota, você pode enviar um body contendo os parâmetros "order", "address", "cellphone", "completed" e "clientId" para cadastrar um novo pedido.

```
body {  "order": "Large Pepperoni",
        "address": "Street XX",
        "cellphone": "40028922",
        "completed": "true/false",
        "clientId": "1"             }
```

### PUT /orders

Através dessa rota, você pode enviar um body contendo o parâmetro "id" e qualquer outro parâmetro que queira atualizar. Por exemplo, se eu for atualizar o order do pedido cujo id seja 1, farei da seguinte forma:

```
body { "id": "1",
       "order": "Small Veggie" }
```

### DELETE /orders

Através dessa rota, você pode enviar um body contendo o parâmetro "id" para excluir um pedido do banco de dados que possua determinado ID. Exemplo:

```
body { "id": "1" }
```