var User = require('../../models/User')
var jwt = require('jsonwebtoken')
var UserAuth = {}

UserAuth.isAuth = function (req, res, next) {
  jwt.verify(req.headers.authentication, 'danangtamtomo', function (err, decoded) {
    if (err) {
      res.send({
        'status': err
      })
    } else {
      next()
    }
  })
}

// UserAuth.profileAuth = function (req, res, next) {
//   jwt.verify(req.headers.authentication, 'danangtamtomo', function (err, decoded) {
//     models.User.findById(decoded.id)
//       .then(function (user) {
//       if (user.role === 'admin') {
//         next()
//       } else {
//         res.send({
//           status: 'You should be admin to do this action'
//         })
//       }
//     })
//   })
// }

module.exports = UserAuth
