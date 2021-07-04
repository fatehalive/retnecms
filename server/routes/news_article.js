const express = require('express')
const router = express.Router()

const NewsArticleController = require('../controller/').newsArticleAPI;

router.get('/', NewsArticleController.getNewsArticleAll);
router.get('/:id', NewsArticleController.getNewsArticleById);
router.post('/', NewsArticleController.createNewsArticle);
router.post('/find', NewsArticleController.getNewsArticle);
router.put('/:id', NewsArticleController.updateNewsArticle);
router.delete('/:id', NewsArticleController.deleteNewsArticle)



module.exports = router
