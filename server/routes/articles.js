/**
 * Created by hacktiv8 on 3/23/17.
 */
var express = require('express');
var router = express.Router();
var ArticleController = require('../controllers/ArticleController')

router.get('/',  ArticleController.getArticles)
router.get('/:id',  ArticleController.getArticle)
router.post('/', ArticleController.createArticle)
router.put('/:id', ArticleController.updateArticle)
router.delete('/:id', ArticleController.deleteArticle)

module.exports = router;
