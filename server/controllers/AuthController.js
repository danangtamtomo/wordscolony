/**
 * Created by hacktiv8 on 3/23/17.
 */

const User = require('../models/User')

var Auths = {}

Auths.doLogin = function(req, res, next) {
  var token = jwt.sign({
    user: req.user.id
  }, 'danangtamtomo')
  req.user.getProfile()
    .then(function(userProfile) {
      res.send({
        message: 'Login success, welcome ' + userProfile.fullname,
        token: token,
      })
    })
}

Auths.failureLogin = function (req, res, next) {
  res.send({
    message: 'Login Failure'
  })
}


Auths.verifyToken = function (req, res, next) {

}

module.exports = Auths
