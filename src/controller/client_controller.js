const client = require('../../database/clients');

const clientsGet = async(req,res)=>{
    let clients = await client.findAll().then();

    res.json(clients);
};

const clientsGetId = async(req,res)=>{
    let client = await client.findOne({where: { id: req.params.id }}).then();

    if (!client){ return res.status(404).json("Client not found")}

    res.json(client);
};

const clientsPost = async(req,res)=>{
    let { name, cellphone, password } = req.body;

    if(!name || !cellphone || !password) {
        return res.status(400).json({"Parameter not found, certify that your REQ is like this:": 
        {   "name": "XXX",
            "cellphone": "XXX",
            "password": "XXX"
        }});
    }

    client.create({ "name": name, "cellphone": cellphone, "password": password});

    res.json(req.body);
};

const clientsPut = async(req,res)=>{
    let { id, name, cellphone, password } = req.body;

    if (!id){return res.status(400).json("ID no exists.")};

    let clientSearch = await client.findOne({where: { id: id }}).then();
    
    if (!clientSearch){ return res.status(404).json("Client not found")}

    clientSearch.update({name, cellphone, password});
    await clientSearch.save();

    res.status(200).json(clientSearch);
};

const clientsDelete = async(req,res)=>{
    let { id } = req.body;

    if (!id){return res.status(400).json("ID no exists.")};

    let clientSearch = await client.findOne({where: { id: id }}).then();
    if (!clientSearch){ return res.status(404).json("Client not found.")};

    await clientSearch.destroy();
    res.status(200).json("Client removed from database.");
}

module.exports = {
    clientsGet,
    clientsGetId,
    clientsPost,
    clientsPut,
    clientsDelete
}