const {Sequeilze, DataTypes} = require('sequelize')
const sequelize = require('../util/databaseconnect')
const User = require('./User')
const Category = require('./Category')
const User_Profile = require('./User_Profile')
const Role = require('./Role')


const News_Article = sequelize.define('news_article', {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  article_title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  article_summary: {
    type: DataTypes.STRING,
    allowNull: false
  },
  article_content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image1_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image2_url: {
    type: DataTypes.STRING,
    allowNull: true
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  },
})

News_Article.belongsTo(User)
User.hasMany(News_Article)
// News_Article.belongsTo(Category)

module.exports = News_Article