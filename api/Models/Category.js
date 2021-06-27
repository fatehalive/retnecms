const { Sequeilze, DataTypes } = require('sequelize')
const sequelize = require('../util/databaseconnect')
const News_Article = require('./News_Article')

const Category = sequelize.define('category', {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  category_name: DataTypes.STRING
})

Category.hasMany(News_Article, {
  foreignKey: {
    type: DataTypes.UUID
  }
})
News_Article.belongsTo(Category)

module.exports = Category