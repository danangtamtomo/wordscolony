/**
 * Created by hacktiv8 on 3/23/17.
 */
var express = require('express');
var router = express.Router();
const AuthController = require('../controllers/AuthController')

router.get('/verify/:token', AuthController.verifyToken);

router.post('/login', AuthController.doLogin);

module.exports = router;
