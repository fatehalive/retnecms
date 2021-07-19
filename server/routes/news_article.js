const express = require('express')
const router = express.Router()

const NewsArticleController = require('../controller/').newsArticleAPI;

router.post('/', NewsArticleController.createNewsArticle);
router.put('/:id', NewsArticleController.updateNewsArticle);
router.delete('/:id', NewsArticleController.deleteNewsArticle)



module.exports = router
