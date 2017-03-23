/**
 * Created by hacktiv8 on 3/23/17.
 */
var express = require('express');
var router = express.Router();
var ArticleController = require('../controllers/ArticleController')

router.get('/',  ArticlesController.getArticles)
router.get('/:id',  ArticlesController.getArticle)
router.post('/', ArticlesController.createArticle)
router.put('/:id', ArticlesController.updateArticle)
router.delete('/:id', ArticlesController.deleteArticle)

module.exports = router;
