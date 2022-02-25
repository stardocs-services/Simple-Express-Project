'use strict';
const {Sequelize} = require('sequelize');

module.exports = {
  async up (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Role',[{
        Id:'c5f698bc-786b-46bd-812c-a19e7beffd78',
        Name: 'Administrator',
      }]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Role', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
