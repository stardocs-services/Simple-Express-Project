'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserRole', {
      Id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      UserId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'User',
          key: 'Id',
          as: 'UserId',
        }
      },
      RoleId: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'Role',
          key: 'Id',
          as: 'RoleId',
        }
      },
      TenantId: {
        type: Sequelize.UUID
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserRole');
  }
};