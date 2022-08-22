require('dotenv').config({path: './vars/.env'});
// EXPRESS
const express = require("express");
const app = express();

app.use(express.json());

// DB
const db = require('./db.js')

db.connection
    .authenticate()
    .then(()=>{
        console.log('Conexão feita com o banco de dados!')
    })
    .catch((error)=>{
        console.log(error)
    });

// ROUTES

app.get("/clients", async function(req,res){
    let clients = await db.client.findAll().then();

    res.json(clients);
});

app.get("/clients/:id", async function(req,res){
    let client = await db.client.findOne({where: { id: req.params.id }}).then();

    if (!client){ return res.status(404).json("Client not found")}

    res.json(client);
});

app.post("/clients", (req,res)=>{
    let { nome, telefone, senha } = req.body;

    if(!nome || !telefone || !senha) {
        return res.status(400).json({"Parameter not found, certify that your REQ is like this:": 
        {   "nome": "XXX",
            "telefone": "XXX",
            "senha": "XXX"
        }});
    }

    db.client.create({ "nome": nome, "telefone": telefone, "senha": senha});

    res.json(req.body);
});

app.put("/clients", async function(req,res){
    let { id, nome, telefone, senha } = req.body;

    if (!id){return res.status(400).json("ID no exists.")};

    let client = await db.client.findOne({where: { id: id }}).then();
    
    if (!client){ return res.status(404).json("Client not found")}

    client.update({nome, telefone, senha});
    await client.save();

    res.status(200).json(client);

});

app.delete("/clients", async function(req,res){
    let { id } = req.body;

    if (!id){return res.status(400).json("ID no exists.")};

    let client = await db.client.findOne({where: { id: id }}).then();
    if (!client){ return res.status(404).json("Client not found.")};

    await client.destroy();
    res.status(200).json("Client removed from database.");
});

app.listen(process.env.PORT, ()=>{console.log("Servidor está ON!")});