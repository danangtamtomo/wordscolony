var express = require('express');
var router = express.Router();

const UserController = require('../controllers/UserController')
const auth = require('../middlewares/auth/UserAuth')

//Register user
router.post('/register', UserController.createUser);
router.get('/', auth.isAuth,UserController.getUsers);

module.exports = router;
