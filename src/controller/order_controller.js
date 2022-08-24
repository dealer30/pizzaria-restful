const orderDB = require('../../database/orders.js');

const ordersGet = async(req,res)=>{
    let orders = await orderDB.findAll().then();

    res.json(orders);
};

const ordersGetId = async(req,res)=>{
    let order = await orderDB.findOne({where: { id: req.params.id }}).then();

    if (!order){ return res.status(404).json("Order not found")}

    res.json(order);
};

const ordersPost = async(req,res)=>{
    let { order, address, cellphone, completed, clientId } = req.body;

    if(!order || !address || !cellphone || !completed || !clientId) {
        return res.status(400).json({"Parameter not found, certify that your REQ is like this:": 
        {   "order": "XXX",
            "address": "XXX",
            "cellphone": "XXX",
            "completed": "boolean",
            "clientId": "XXX",
        }});
    }

    orderDB.create({  "order": order,
                    "address": address,
                    "cellphone": cellphone,
                    "completed": completed,
                    "clientId": clientId, });

    res.json(req.body);
};

const ordersPut = async(req,res)=>{
    let { id, order, address, cellphone, completed, clientId } = req.body;

    if (!id){return res.status(400).json("ID no exists.")};

    let orderSearch = await orderDB.findOne({where: { id: id }}).then();
    
    if (!orderSearch){ return res.status(404).json("Order not found")}

    orderSearch.update({order, address, cellphone, completed, clientId});
    await orderSearch.save();

    res.status(200).json(orderSearch);
};

const ordersDelete = async(req,res)=>{
    let { id } = req.body;

    if (!id){return res.status(400).json("ID no exists.")};

    let order = await orderDB.findOne({where: { id: id }}).then();
    if (!order){ return res.status(404).json("Order not found.")};

    await order.destroy();
    res.status(200).json("Order removed from database.");
}

module.exports = {
    ordersGet,
    ordersGetId,
    ordersPost,
    ordersPut,
    ordersDelete
}