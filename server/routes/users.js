var express = require('express');
var router = express.Router();

const UserController = require('../controllers/UserController')

//Register user
router.post('/register', UserController.createUser);

module.exports = router;
