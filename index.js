require('dotenv').config({path: './vars/.env'});
// EXPRESS
const express = require("express");
const app = express();

app.use(express.json());

// DB
const db = require('./database/db.js');


db.authenticate()
    .then(()=>{
        console.log('Conexão feita com o banco de dados!')
    })
    .catch((error)=>{
        console.log(error)
    });

// ROUTES
const clientRoutes = require('./src/routes/client_routes');
const orderRoutes = require('./src/routes/order_routes');

app.use('/', clientRoutes);
app.use('/', orderRoutes);

app.use('/', (req,res)=>{
    res.status(404).json('Page not found.');
})

app.listen(process.env.PORT, ()=>{console.log("Servidor está ON!")});