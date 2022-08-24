const Sequelize = require("sequelize");
require('dotenv').config({path: '../vars/.env'});

const connection = new Sequelize('pizzaria', process.env.DB_USER , process.env.DB_PASSWORD , {
    host: process.env.HOST_DB,
    dialect: 'mysql',
    logging: false
});

module.exports = connection;