/**
 * Created by hacktiv8 on 3/23/17.
 */
var mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(`mongodb://localhost/dananglivecoding`)

var db = mongoose.connection

module.exports = db
