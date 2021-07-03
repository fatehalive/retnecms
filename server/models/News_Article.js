'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class News_Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      News_Article.belongsTo(models.Category, {
        foreignKey: "category_uuid",
        as: 'category'
      })
      News_Article.belongsTo(models.User, {
        foreignKey: "user_uuid",
        as: 'user'
      })
    }
  };
  News_Article.init({
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
  }, {
    sequelize,
    tableName: 'news_articles',
    modelName: 'News_Article',
  });
  return News_Article;
};