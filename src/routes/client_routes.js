const express = require('express');
const clientRouter = require('../controller/client_controller');
const router = express.Router();

router.get('/clients', clientRouter.clientsGet);

router.get('/clients/:id', clientRouter.clientsGetId);

router.post('/clients', clientRouter.clientsPost);

router.put('/clients', clientRouter.clientsPut);

router.delete('/clients', clientRouter.clientsDelete);

module.exports = router;