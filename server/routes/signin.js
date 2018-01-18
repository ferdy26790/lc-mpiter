const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')

router.post('/', userController.signIn)

module.exports = router;
