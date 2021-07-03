'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('News_Articles', {
      uuid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      article_title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      article_summary: {
        type: Sequelize.STRING,
        allowNull: false
      },
      article_content: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image1_url: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image2_url: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('News_Articles');
  }
};