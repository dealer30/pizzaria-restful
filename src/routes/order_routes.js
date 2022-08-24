const express = require('express');
const orderRouter = require('../controller/order_controller');
const router = express.Router();

router.get('/orders', orderRouter.ordersGet);

router.get('/orders/:id', orderRouter.ordersGetId);

router.post('/orders', orderRouter.ordersPost);

router.put('/orders', orderRouter.ordersPut);

router.delete('/orders', orderRouter.ordersDelete);

module.exports = router;