const Sequelize = require("sequelize");
require('dotenv').config({path: './vars/.env'});

const connection = new Sequelize('pizzaria', process.env.DB_USER , process.env.DB_PASSWORD , {
    host: process.env.HOST_DB,
    dialect: 'mysql',
    logging: false
});

const client = connection.define('client', {
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },

    telefone: {
        type: Sequelize.STRING,
        alowNull: false
    },

    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {tablenome: 'Clientes'});

client.sync({force: false}).then(()=>{});

exports.client = client;

exports.connection = connection;