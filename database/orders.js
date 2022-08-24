const Sequelize = require("sequelize");
const connection = require("./db.js");
const client = require("./clients.js")

const orderDB = connection.define('orders', {
    order:{
        type: Sequelize.STRING,
        allowNull: false
    },

    address: {
        type: Sequelize.STRING,
        alowNull: false
    },

    cellphone: {
        type: Sequelize.STRING,
        allowNull: false
    },

    completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
}, {tablename: 'Pizza Orders'});

orderDB.belongsTo(client);

orderDB.sync({force: false}).then(()=>{});

module.exports = orderDB;