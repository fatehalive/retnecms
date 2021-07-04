const categoryAPI = require('./CategoryController')
const roleAPI = require('./RoleController')
const newsArticle = require('./NewsArticleController')
const userAPI = require('./UsersController')

module.exports = {
  categoryAPI,
  newsArticle,
  roleAPI,
  userAPI
}