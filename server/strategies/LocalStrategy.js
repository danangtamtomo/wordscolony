/**
 * Created by hacktiv8 on 3/23/17.
 */
var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  User = require('../models/User')

passport.use(new LocalStrategy({
    passReqToCallback: true
  },
  function (req, username, password, done) {
    User.findOne({
        username: username
    })
      .then(function (user) {
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' })
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' })
        }
        return done(null, user)
      })
      .catch(function (err) {
        console.log(err)
      })
  }
))

passport.serializeUser(function (user, cb) {
  cb(null, user)
})

module.exports = passport
