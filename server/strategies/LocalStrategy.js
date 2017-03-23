/**
 * Created by hacktiv8 on 3/23/17.
 */
var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  User = require('../models/User')
const crypto = require('crypto')

passport.use(new LocalStrategy(function (username, password, done) {
    User.findOne({
        username: username
    })
      .then(function (user) {
        const hash = crypto.createHmac('sha256', password)
          .update(user.salt)

        if (!user) {
          return done(null, false, { message: 'Incorrect username.' })
        }


        if (user.password !== hash.digest('hex')) {
          return done(null, false, { message: 'Incorrect password.' })
        }

        // if (!user.validPassword(password)) {
        //   return done(null, false, { message: 'Incorrect password.' })
        // }
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
