'use strict';
const {Sequelize} = require('sequelize');

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('User',[{
      Id:'8363f010-37ff-471b-ac8c-75c69c0da877',
      Name: 'Amos',
      UserName: 'amosa',
      Email: 'amos.ang@stardocs.net',
      Password: 'P@ssw0rd',
      PhoneNumber: '1234567890',
      MobileNumber: '0124027099',
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
    return queryInterface.bulkDelete('User', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
