const {Sequeilze, DataTypes} = require('sequelize')
const sequelize = require('../util/databaseconnect')
const User_Profile = require('./User_Profile')
const Role = require('./Role')
const News_Article = require('./News_Article')
const User = sequelize.define('user', {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
})

User.belongsTo(Role)
Role.hasOne(User)
User.hasOne(User_Profile)
User_Profile.belongsTo(User)

module.exports = User