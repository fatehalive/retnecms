const express = require('express')
const router = express.Router()

const CategoryController = require('../Controller/CategoryController');
const NewsArticleController = require('../Controller/NewsArticleController');

router.get('/category', CategoryController.getCategory);
router.post('/category', CategoryController.postCategory);
router.get('/news-article', NewsArticleController.getNewsArticle);
// router.post('/todos', TodosController.postTodos);
// router.put('/todos/:id', TodosController.updateTodos);
// router.delete('/todos/:id', TodosController.deleteTodos);

module.exports = router