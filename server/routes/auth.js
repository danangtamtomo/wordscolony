/**
 * Created by hacktiv8 on 3/23/17.
 */
var express = require('express');
var router = express.Router();
const AuthController = require('../controllers/AuthController')
const LocalStrategy = require('../strategies/LocalStrategy')


router.get('/verify/:token', AuthController.verifyToken);

router.get('/login', AuthController.failureLogin)

router.post('/login', LocalStrategy.authenticate('local', {
  failureRedirect: '/auth/login'
}), AuthController.doLogin);

module.exports = router;
