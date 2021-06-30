const {Sequeilze, DataTypes} = require('sequelize')
const sequelize = require('../util/databaseconnect')

const role = sequelize.define('role', {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  },
})

module.exports = role