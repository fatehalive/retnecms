const News_Article = require("../models/").News_article

exports.getNewsArticle = (req, res, next) => {
  News_Article.findAll({ order: [["createdAt", "DESC"]] }).then(response => {
    res.status(200).json({
      News_Article: response
    })
  })
}
