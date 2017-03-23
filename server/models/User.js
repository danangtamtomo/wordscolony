/**
 * Created by hacktiv8 on 3/23/17.
 */
var mongoose = require('mongoose')
const crypto = require('crypto')

var userSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  fullname: String,
  salt: String,
  address: String,
  phone: String,
}, {
  timestamps: true
})

userSchema.pre('save', function (next) {
  var salt = crypto.randomBytes(10).toString('hex')
  const password = this.password
  const hash = crypto.createHmac('sha256', password)
    .update(salt)
  this.password = hash.digest('hex')
  this.salt = salt
  next()
})

var User = mongoose.model('User', userSchema)

module.exports = User