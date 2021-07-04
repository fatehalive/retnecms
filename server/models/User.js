'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.News_Article, {
        foreignKey: "user_uuid",
        as: "news_article"
      })
      User.belongsTo(models.Role, {
        foreignKey: "role_uuid",
        as: "role"
      })
      User.hasOne(models.User_Profile, {
        foreignKey: "user_uuid",
        as: "user_profile"
      })
    }
  };
  User.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    jwt_token: DataTypes.TEXT,
  }, {
    sequelize,
    tableName: 'users',
    modelName: 'User',
  });
  return User;
};