//Conf dependencias do express
const express = require('express');
const router = express.Router();
const controller = require('../controller/user-controller');

router.get('/', controller.get);

module.exports = router;