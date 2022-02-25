'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('UserRole',[{
      Id:'31a42d1d-0691-47e5-b19a-112ebb4a9689',
      UserId: '8363f010-37ff-471b-ac8c-75c69c0da877',
      RoleId: 'c5f698bc-786b-46bd-812c-a19e7beffd78',
      TenantId: '4776f938-a9b1-4aeb-bac2-6674fa2ab541',
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
    return queryInterface.bulkDelete('UserRole', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
