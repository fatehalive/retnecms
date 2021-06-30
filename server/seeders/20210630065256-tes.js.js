'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tes', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'demo@demo.com',
      createdAt: () => {
        let x = Date.now();
        let y = new Date(x);
        return y;
      }
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

console.log(module.exports.up)