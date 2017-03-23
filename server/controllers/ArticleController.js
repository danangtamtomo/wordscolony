/**
 * Created by hacktiv8 on 3/23/17.
 */
var Article = require('../models/Article')

var Articles = {}

Articles.getArticles = function (req, res, next) {
  Article.find({})
    .then(function (articles) {
      res.send(articles)
    })
}

Articles.getArticle = function (req, res, next) {
  Article.find({id: req.params.id})
    .then(function (article) {
      res.send(article)
    })
}

Articles.createArticle = function (req, res, next) {
  var article = new Article(req.body)
  article.save()
    .then(function (article) {
      res.send({
        status: 'Ok',
        message: 'New article has been created',
        article: article
      })
    }).catch(function (err) {
    res.send({
      status: 'Error',
      message: err
    })
  })
}

Articles.updateArticle = function (req, res, next) {
  Article.update({
    _id: req.params.id
  }, {
    $set: req.body
  })
    .then(function (err, article) {
      res.send({
        status: 'Ok',
        message: `Article has been updated`,
        updated_article: article
      })
    })
}

Articles.deleteArticle = function (req, res, next) {
  Article.remove({
    _id: req.params.id
  })
    .then(function () {
      res.send({
        status: 'Ok',
        message: `The article has been deleted`
      })
    })
    .catch(function (err) {
      if (err) {
        res.send({
          status: 'Error',
          message: err
        })
      }
    })
}

module.exports = Articles