/**
 * Created by hacktiv8 on 3/23/17.
 */
var mongoose = require('mongoose')

var articleSchema = mongoose.Schema({
  title: String,
  content: String,
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, {
  timestamps: true
})

var Article = mongoose.model('Article', articleSchema)

module.exports = Article
