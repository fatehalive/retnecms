const express = require('express')
const router = express.Router()

const NewsArticleController = require('../controller/').newsArticle;

router.get('/news-article', NewsArticleController.getNewsArticle);



module.exports = router
