const Sequelize = require("sequelize");
const connection = require("./db.js");

const client = connection.define('clients', {
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },

    cellphone: {
        type: Sequelize.STRING,
        alowNull: false
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {tablename: 'Clients'});

client.sync({force: false}).then(()=>{});

module.exports = client;